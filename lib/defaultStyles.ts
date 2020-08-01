export interface Color {
    color: string;
    contrast: string;
}

export interface Palette {
    accent: Color;
    primary: Color;
    secondary: Color;
}

export interface StyleObject {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    palette: Palette;
}

export const defaultStyles: StyleObject = {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    lineHeight: '1.2',
    palette: {
        accent: {
            color: '#2979FF',
            contrast: 'white',
        },
        primary: {
            color: '#2196F3',
            contrast: 'black',
        },
        secondary: {
            color: '#607D8B',
            contrast: 'white',
        },
    },
};
