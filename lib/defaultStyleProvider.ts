import { defaultStyles, StyleObject } from './defaultStyles';
import { StyleProvider } from './StyleProvider';

// StyleProvider object
const styleProviderObject: StyleProvider<StyleObject> = new StyleProvider(defaultStyles);

// rootStyleProvider for use in the root component
export const rootStyleProvider: StyleProvider<StyleObject>['rootStyleProvider'] = styleProviderObject.rootStyleProvider;

// styleProvider to alter styles in child components
export const styleProvider: StyleProvider<StyleObject>['styleProvider'] = styleProviderObject.styleProvider;
