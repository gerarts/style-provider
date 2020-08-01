export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export interface StyleProviderOptions {
    mount?: string;
    renderAll?: boolean;
}

enum StyleObjectType {
    Custom = 'custom',
    Fallback = 'fallback',
}

interface RenderResult {
    fields: string[];
    render: string;
}

interface ParserResult {
    fields: string[];
    renders: string[];
}

const emptyStyles: {} = {};

/**
 * Construct your own style provider with a custom fallback style object
 */
export class StyleProvider<T extends {}, R = string> {
    private readonly converter: (css: string) => R;

    private readonly fallback: T;
    private renderedFallback?: RenderResult;

    private readonly mount: string;
    private readonly renderAll: boolean;

    private readonly rendered: Map<DeepPartial<T>, R> = new Map();
    private readonly renderedAll: Map<DeepPartial<T>, R> = new Map();

    constructor(fallback: T, converter?: (css: string) => R, options: StyleProviderOptions = {}) {
        this.fallback = fallback;
        this.converter = <(css: string) => R>(converter === undefined ? (css: string): string => css : converter);
        this.mount = options.mount || ':host';
        this.renderAll = !!options.renderAll;
    }

    /**
     * Generate the root CSS string from a styles object if no cached version is found
     */
    public readonly rootStyleProvider = (styles?: DeepPartial<T>): R => {
        return this.styleProvider(styles, true);
    }

    /**
     * Generate a CSS string from a styles object if no cached version is found
     */
    public readonly styleProvider = (styles: DeepPartial<T> = emptyStyles, renderAll: boolean = this.renderAll): R => {
        const map: Map<DeepPartial<T>, R> = renderAll ? this.renderedAll : this.rendered;

        if (!map.has(styles)) {
            map.set(styles, this.generate(styles, renderAll));
        }

        return <R>map.get(styles);
    }

    /**
     * Generate a CSS string from a styles object
     */
    private readonly generate = (styles: DeepPartial<T>, renderAll: boolean): R => {
        if (!this.renderedFallback) {
            this.renderedFallback = this.render(this.fallback, StyleObjectType.Fallback);
        }

        const r: RenderResult = this.render(styles, StyleObjectType.Custom);

        let returnable: string = `${this.mount} { `;

        if (renderAll) {
            returnable = `${returnable} ${this.renderedFallback.render}`;
        }

        returnable = `${returnable} ${r.render} ${this.fields(renderAll ? this.renderedFallback.fields : [], r.fields)} }`;

        return this.converter(returnable);
    }

    /**
     * Convert two arrays of fields to a final field resolver CSS string
     */
    private readonly fields = (fallback: string[], custom: string[]): string => [...fallback, ...custom].filter(
        (f: string, i: number, a: string[]) => a.indexOf(f) === i,
    ).map(
        (f: string) => `--${f}: var(--${StyleObjectType.Custom}_${f}, --${StyleObjectType.Fallback}_${f});`,
    ).join(' ')

    /**
     * Return a string of CSS vars and a list of created vars from a styles object
     */
    private readonly render = (styles: DeepPartial<T>, type: StyleObjectType): RenderResult => {
        const parsed: ParserResult = this.parser(styles, type);

        return {
            fields: parsed.fields,
            render: parsed.renders.join(' '),
        };
    }

    /**
     * Return an array of CSS vars and a list of created vars from a styles object
     */
    private readonly parser = <S extends {}>(styles: S, type: StyleObjectType, prefix?: string): ParserResult => {
        const returnable: ParserResult = { fields: [], renders: [] };

        (<(keyof S)[]>Object.keys(styles)).forEach((k: keyof S) => {
            const key: string = prefix === undefined ? this.dashCase(String(k)) : `${prefix}-${this.dashCase(String(k))}`;

            switch(typeof styles[k]) {
                case 'object':
                    const parserResult: ParserResult = this.parser(styles[k], type, key);
                    returnable.fields.push(...parserResult.fields);
                    returnable.renders.push(...parserResult.renders);
                    break;
                case 'boolean':
                case 'number':
                case 'string':
                    returnable.fields.push(key);
                    returnable.renders.push(`--${type}_${key}: ${styles[k]};`);
                    break;
                default:
            }
        });

        return returnable;
    }

    /**
     * Convert PascalCase / camelCase to dash-case
     */
    private readonly dashCase = (s: string): string => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
