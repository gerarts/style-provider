export interface Color {
    color: string;
    contrast: 'black' | 'white';
}

export interface AppPalette {
    primary: Color;
    secondary: Color;
}

export interface CustomStyles {
    [key: string]: CustomStyles | string;
}

export interface Colors {
    red: ExtendedShades;
    pink: ExtendedShades;
    purple: ExtendedShades;
    deepPurple: ExtendedShades;
    indigo: ExtendedShades;
    blue: ExtendedShades;
    lightBlue: ExtendedShades;
    cyan: ExtendedShades;
    teal: ExtendedShades;
    green: ExtendedShades;
    lightGreen: ExtendedShades;
    lime: ExtendedShades;
    yellow: ExtendedShades;
    amber: ExtendedShades;
    orange: ExtendedShades;
    deepOrange: ExtendedShades;
    brown: Shades;
    gray: Shades;
    blueGray: Shades;
    black: Shade;
    white: Shade;
}

export interface Shades {
    shade50: Color;
    shade100: Color;
    shade200: Color;
    shade300: Color;
    shade400: Color;
    shade500: Color;
    shade600: Color;
    shade700: Color;
    shade800: Color;
    shade900: Color;
}

export interface ExtendedShades extends Shades {
    accent100: Color;
    accent200: Color;
    accent400: Color;
    accent700: Color;
}

export interface Shade {
    shade: Color;
}

export const colors: Colors = {
    red: {
        shade50: {
            color: '#FFEBEE',
            contrast: 'black',
        },
        shade100: {
            color: '#FFCDD2',
            contrast: 'black',
        },
        shade200: {
            color: '#EF9A9A',
            contrast: 'black',
        },
        shade300: {
            color: '#E57373',
            contrast: 'black',
        },
        shade400: {
            color: '#EF5350',
            contrast: 'white',
        },
        shade500: {
            color: '#F44336',
            contrast: 'white',
        },
        shade600: {
            color: '#E53935',
            contrast: 'white',
        },
        shade700: {
            color: '#D32F2F',
            contrast: 'white',
        },
        shade800: {
            color: '#C62828',
            contrast: 'white',
        },
        shade900: {
            color: '#B71C1C',
            contrast: 'white',
        },
        accent100: {
            color: '#FF8A80',
            contrast: 'black',
        },
        accent200: {
            color: '#FF5252',
            contrast: 'white',
        },
        accent400: {
            color: '#FF1744',
            contrast: 'white',
        },
        accent700: {
            color: '#D50000',
            contrast: 'white',
        },
    },
    pink: {
        shade50: {
            color: '#FCE4EC',
            contrast: 'black',
        },
        shade100: {
            color: '#F8BBD0',
            contrast: 'black',
        },
        shade200: {
            color: '#F48FB1',
            contrast: 'black',
        },
        shade300: {
            color: '#F06292',
            contrast: 'black',
        },
        shade400: {
            color: '#EC407A',
            contrast: 'white',
        },
        shade500: {
            color: '#E91E63',
            contrast: 'white',
        },
        shade600: {
            color: '#D81B60',
            contrast: 'white',
        },
        shade700: {
            color: '#C2185B',
            contrast: 'white',
        },
        shade800: {
            color: '#AD1457',
            contrast: 'white',
        },
        shade900: {
            color: '#880E4F',
            contrast: 'white',
        },
        accent100: {
            color: '#FF80AB',
            contrast: 'black',
        },
        accent200: {
            color: '#FF4081',
            contrast: 'white',
        },
        accent400: {
            color: '#F50057',
            contrast: 'white',
        },
        accent700: {
            color: '#C51162',
            contrast: 'white',
        },
    },
    purple: {
        shade50: {
            color: '#F3E5F5',
            contrast: 'black',
        },
        shade100: {
            color: '#E1BEE7',
            contrast: 'black',
        },
        shade200: {
            color: '#CE93D8',
            contrast: 'black',
        },
        shade300: {
            color: '#BA68C8',
            contrast: 'white',
        },
        shade400: {
            color: '#AB47BC',
            contrast: 'white',
        },
        shade500: {
            color: '#9C27B0',
            contrast: 'white',
        },
        shade600: {
            color: '#8E24AA',
            contrast: 'white',
        },
        shade700: {
            color: '#7B1FA2',
            contrast: 'white',
        },
        shade800: {
            color: '#6A1B9A',
            contrast: 'white',
        },
        shade900: {
            color: '#4A148C',
            contrast: 'white',
        },
        accent100: {
            color: '#EA80FC',
            contrast: 'black',
        },
        accent200: {
            color: '#E040FB',
            contrast: 'white',
        },
        accent400: {
            color: '#D500F9',
            contrast: 'white',
        },
        accent700: {
            color: '#AA00FF',
            contrast: 'white',
        },
    },
    deepPurple: {
        shade50: {
            color: '#EDE7F6',
            contrast: 'black',
        },
        shade100: {
            color: '#D1C4E9',
            contrast: 'black',
        },
        shade200: {
            color: '#B39DDB',
            contrast: 'black',
        },
        shade300: {
            color: '#9575CD',
            contrast: 'white',
        },
        shade400: {
            color: '#7E57C2',
            contrast: 'white',
        },
        shade500: {
            color: '#673AB7',
            contrast: 'white',
        },
        shade600: {
            color: '#5E35B1',
            contrast: 'white',
        },
        shade700: {
            color: '#512DA8',
            contrast: 'white',
        },
        shade800: {
            color: '#4527A0',
            contrast: 'white',
        },
        shade900: {
            color: '#311B92',
            contrast: 'white',
        },
        accent100: {
            color: '#B388FF',
            contrast: 'black',
        },
        accent200: {
            color: '#7C4DFF',
            contrast: 'white',
        },
        accent400: {
            color: '#651FFF',
            contrast: 'white',
        },
        accent700: {
            color: '#6200EA',
            contrast: 'white',
        },
    },
    indigo: {
        shade50: {
            color: '#E8EAF6',
            contrast: 'black',
        },
        shade100: {
            color: '#C5CAE9',
            contrast: 'black',
        },
        shade200: {
            color: '#9FA8DA',
            contrast: 'black',
        },
        shade300: {
            color: '#7986CB',
            contrast: 'white',
        },
        shade400: {
            color: '#5C6BC0',
            contrast: 'white',
        },
        shade500: {
            color: '#3F51B5',
            contrast: 'white',
        },
        shade600: {
            color: '#3949AB',
            contrast: 'white',
        },
        shade700: {
            color: '#303F9F',
            contrast: 'white',
        },
        shade800: {
            color: '#283593',
            contrast: 'white',
        },
        shade900: {
            color: '#1A237E',
            contrast: 'white',
        },
        accent100: {
            color: '#8C9EFF',
            contrast: 'black',
        },
        accent200: {
            color: '#536DFE',
            contrast: 'white',
        },
        accent400: {
            color: '#3D5AFE',
            contrast: 'white',
        },
        accent700: {
            color: '#304FFE',
            contrast: 'white',
        },
    },
    blue: {
        shade50: {
            color: '#E3F2FD',
            contrast: 'black',
        },
        shade100: {
            color: '#BBDEFB',
            contrast: 'black',
        },
        shade200: {
            color: '#90CAF9',
            contrast: 'black',
        },
        shade300: {
            color: '#64B5F6',
            contrast: 'black',
        },
        shade400: {
            color: '#42A5F5',
            contrast: 'black',
        },
        shade500: {
            color: '#2196F3',
            contrast: 'black',
        },
        shade600: {
            color: '#1E88E5',
            contrast: 'white',
        },
        shade700: {
            color: '#1976D2',
            contrast: 'white',
        },
        shade800: {
            color: '#1565C0',
            contrast: 'white',
        },
        shade900: {
            color: '#0D47A1',
            contrast: 'white',
        },
        accent100: {
            color: '#82B1FF',
            contrast: 'black',
        },
        accent200: {
            color: '#448AFF',
            contrast: 'white',
        },
        accent400: {
            color: '#2979FF',
            contrast: 'white',
        },
        accent700: {
            color: '#2962FF',
            contrast: 'white',
        },
    },
    lightBlue: {
        shade50: {
            color: '#E1F5FE',
            contrast: 'black',
        },
        shade100: {
            color: '#B3E5FC',
            contrast: 'black',
        },
        shade200: {
            color: '#81D4FA',
            contrast: 'black',
        },
        shade300: {
            color: '#4FC3F7',
            contrast: 'black',
        },
        shade400: {
            color: '#29B6F6',
            contrast: 'black',
        },
        shade500: {
            color: '#03A9F4',
            contrast: 'black',
        },
        shade600: {
            color: '#039BE5',
            contrast: 'black',
        },
        shade700: {
            color: '#0288D1',
            contrast: 'white',
        },
        shade800: {
            color: '#0277BD',
            contrast: 'white',
        },
        shade900: {
            color: '#01579B',
            contrast: 'white',
        },
        accent100: {
            color: '#80D8FF',
            contrast: 'black',
        },
        accent200: {
            color: '#40C4FF',
            contrast: 'black',
        },
        accent400: {
            color: '#00B0FF',
            contrast: 'black',
        },
        accent700: {
            color: '#0091EA',
            contrast: 'white',
        },
    },
    cyan: {
        shade50: {
            color: '#E0F7FA',
            contrast: 'black',
        },
        shade100: {
            color: '#B2EBF2',
            contrast: 'black',
        },
        shade200: {
            color: '#80DEEA',
            contrast: 'black',
        },
        shade300: {
            color: '#4DD0E1',
            contrast: 'black',
        },
        shade400: {
            color: '#26C6DA',
            contrast: 'black',
        },
        shade500: {
            color: '#00BCD4',
            contrast: 'black',
        },
        shade600: {
            color: '#00ACC1',
            contrast: 'black',
        },
        shade700: {
            color: '#0097A7',
            contrast: 'white',
        },
        shade800: {
            color: '#00838F',
            contrast: 'white',
        },
        shade900: {
            color: '#006064',
            contrast: 'white',
        },
        accent100: {
            color: '#84FFFF',
            contrast: 'black',
        },
        accent200: {
            color: '#18FFFF',
            contrast: 'black',
        },
        accent400: {
            color: '#00E5FF',
            contrast: 'black',
        },
        accent700: {
            color: '#00B8D4',
            contrast: 'black',
        },
    },
    teal: {
        shade50: {
            color: '#E0F2F1',
            contrast: 'black',
        },
        shade100: {
            color: '#B2DFDB',
            contrast: 'black',
        },
        shade200: {
            color: '#80CBC4',
            contrast: 'black',
        },
        shade300: {
            color: '#4DB6AC',
            contrast: 'black',
        },
        shade400: {
            color: '#26A69A',
            contrast: 'black',
        },
        shade500: {
            color: '#009688',
            contrast: 'white',
        },
        shade600: {
            color: '#00897B',
            contrast: 'white',
        },
        shade700: {
            color: '#00796B',
            contrast: 'white',
        },
        shade800: {
            color: '#00695C',
            contrast: 'white',
        },
        shade900: {
            color: '#004D40',
            contrast: 'white',
        },
        accent100: {
            color: '#A7FFEB',
            contrast: 'black',
        },
        accent200: {
            color: '#64FFDA',
            contrast: 'black',
        },
        accent400: {
            color: '#1DE9B6',
            contrast: 'black',
        },
        accent700: {
            color: '#00BFA5',
            contrast: 'black',
        },
    },
    green: {
        shade50: {
            color: '#E8F5E9',
            contrast: 'black',
        },
        shade100: {
            color: '#C8E6C9',
            contrast: 'black',
        },
        shade200: {
            color: '#A5D6A7',
            contrast: 'black',
        },
        shade300: {
            color: '#81C784',
            contrast: 'black',
        },
        shade400: {
            color: '#66BB6A',
            contrast: 'black',
        },
        shade500: {
            color: '#4CAF50',
            contrast: 'black',
        },
        shade600: {
            color: '#43A047',
            contrast: 'white',
        },
        shade700: {
            color: '#388E3C',
            contrast: 'white',
        },
        shade800: {
            color: '#2E7D32',
            contrast: 'white',
        },
        shade900: {
            color: '#1B5E20',
            contrast: 'white',
        },
        accent100: {
            color: '#B9F6CA',
            contrast: 'black',
        },
        accent200: {
            color: '#69F0AE',
            contrast: 'black',
        },
        accent400: {
            color: '#00E676',
            contrast: 'black',
        },
        accent700: {
            color: '#00C853',
            contrast: 'black',
        },
    },
    lightGreen: {
        shade50: {
            color: '#F1F8E9',
            contrast: 'black',
        },
        shade100: {
            color: '#DCEDC8',
            contrast: 'black',
        },
        shade200: {
            color: '#C5E1A5',
            contrast: 'black',
        },
        shade300: {
            color: '#AED581',
            contrast: 'black',
        },
        shade400: {
            color: '#9CCC65',
            contrast: 'black',
        },
        shade500: {
            color: '#8BC34A',
            contrast: 'black',
        },
        shade600: {
            color: '#7CB342',
            contrast: 'black',
        },
        shade700: {
            color: '#689F38',
            contrast: 'black',
        },
        shade800: {
            color: '#558B2F',
            contrast: 'white',
        },
        shade900: {
            color: '#33691E',
            contrast: 'white',
        },
        accent100: {
            color: '#CCFF90',
            contrast: 'black',
        },
        accent200: {
            color: '#B2FF59',
            contrast: 'black',
        },
        accent400: {
            color: '#76FF03',
            contrast: 'black',
        },
        accent700: {
            color: '#64DD17',
            contrast: 'black',
        },
    },
    lime: {
        shade50: {
            color: '#F9FBE7',
            contrast: 'black',
        },
        shade100: {
            color: '#F0F4C3',
            contrast: 'black',
        },
        shade200: {
            color: '#E6EE9C',
            contrast: 'black',
        },
        shade300: {
            color: '#DCE775',
            contrast: 'black',
        },
        shade400: {
            color: '#D4E157',
            contrast: 'black',
        },
        shade500: {
            color: '#CDDC39',
            contrast: 'black',
        },
        shade600: {
            color: '#C0CA33',
            contrast: 'black',
        },
        shade700: {
            color: '#AFB42B',
            contrast: 'black',
        },
        shade800: {
            color: '#9E9D24',
            contrast: 'black',
        },
        shade900: {
            color: '#827717',
            contrast: 'white',
        },
        accent100: {
            color: '#F4FF81',
            contrast: 'black',
        },
        accent200: {
            color: '#EEFF41',
            contrast: 'black',
        },
        accent400: {
            color: '#C6FF00',
            contrast: 'black',
        },
        accent700: {
            color: '#AEEA00',
            contrast: 'black',
        },
    },
    yellow: {
        shade50: {
            color: '#FFFDE7',
            contrast: 'black',
        },
        shade100: {
            color: '#FFF9C4',
            contrast: 'black',
        },
        shade200: {
            color: '#FFF59D',
            contrast: 'black',
        },
        shade300: {
            color: '#FFF176',
            contrast: 'black',
        },
        shade400: {
            color: '#FFEE58',
            contrast: 'black',
        },
        shade500: {
            color: '#FFEB3B',
            contrast: 'black',
        },
        shade600: {
            color: '#FDD835',
            contrast: 'black',
        },
        shade700: {
            color: '#FBC02D',
            contrast: 'black',
        },
        shade800: {
            color: '#F9A825',
            contrast: 'black',
        },
        shade900: {
            color: '#F57F17',
            contrast: 'black',
        },
        accent100: {
            color: '#FFFF8D',
            contrast: 'black',
        },
        accent200: {
            color: '#FFFF00',
            contrast: 'black',
        },
        accent400: {
            color: '#FFEA00',
            contrast: 'black',
        },
        accent700: {
            color: '#FFD600',
            contrast: 'black',
        },
    },
    amber: {
        shade50: {
            color: '#FFF8E1',
            contrast: 'black',
        },
        shade100: {
            color: '#FFECB3',
            contrast: 'black',
        },
        shade200: {
            color: '#FFE082',
            contrast: 'black',
        },
        shade300: {
            color: '#FFD54F',
            contrast: 'black',
        },
        shade400: {
            color: '#FFCA28',
            contrast: 'black',
        },
        shade500: {
            color: '#FFC107',
            contrast: 'black',
        },
        shade600: {
            color: '#FFB300',
            contrast: 'black',
        },
        shade700: {
            color: '#FFA000',
            contrast: 'black',
        },
        shade800: {
            color: '#FF8F00',
            contrast: 'black',
        },
        shade900: {
            color: '#FF6F00',
            contrast: 'black',
        },
        accent100: {
            color: '#FFE57F',
            contrast: 'black',
        },
        accent200: {
            color: '#FFD740',
            contrast: 'black',
        },
        accent400: {
            color: '#FFC400',
            contrast: 'black',
        },
        accent700: {
            color: '#FFAB00',
            contrast: 'black',
        },
    },
    orange: {
        shade50: {
            color: '#FFF3E0',
            contrast: 'black',
        },
        shade100: {
            color: '#FFE0B2',
            contrast: 'black',
        },
        shade200: {
            color: '#FFCC80',
            contrast: 'black',
        },
        shade300: {
            color: '#FFB74D',
            contrast: 'black',
        },
        shade400: {
            color: '#FFA726',
            contrast: 'black',
        },
        shade500: {
            color: '#FF9800',
            contrast: 'black',
        },
        shade600: {
            color: '#FB8C00',
            contrast: 'black',
        },
        shade700: {
            color: '#F57C00',
            contrast: 'black',
        },
        shade800: {
            color: '#EF6C00',
            contrast: 'black',
        },
        shade900: {
            color: '#E65100',
            contrast: 'white',
        },
        accent100: {
            color: '#FFD180',
            contrast: 'black',
        },
        accent200: {
            color: '#FFAB40',
            contrast: 'black',
        },
        accent400: {
            color: '#FF9100',
            contrast: 'black',
        },
        accent700: {
            color: '#FF6D00',
            contrast: 'black',
        },
    },
    deepOrange: {
        shade50: {
            color: '#FBE9E7',
            contrast: 'black',
        },
        shade100: {
            color: '#FFCCBC',
            contrast: 'black',
        },
        shade200: {
            color: '#FFAB91',
            contrast: 'black',
        },
        shade300: {
            color: '#FF8A65',
            contrast: 'black',
        },
        shade400: {
            color: '#FF7043',
            contrast: 'black',
        },
        shade500: {
            color: '#FF5722',
            contrast: 'black',
        },
        shade600: {
            color: '#F4511E',
            contrast: 'white',
        },
        shade700: {
            color: '#E64A19',
            contrast: 'white',
        },
        shade800: {
            color: '#D84315',
            contrast: 'white',
        },
        shade900: {
            color: '#BF360C',
            contrast: 'white',
        },
        accent100: {
            color: '#FF9E80',
            contrast: 'black',
        },
        accent200: {
            color: '#FF6E40',
            contrast: 'black',
        },
        accent400: {
            color: '#FF3D00',
            contrast: 'white',
        },
        accent700: {
            color: '#DD2C00',
            contrast: 'white',
        },
    },
    brown: {
        shade50: {
            color: '#EFEBE9',
            contrast: 'black',
        },
        shade100: {
            color: '#D7CCC8',
            contrast: 'black',
        },
        shade200: {
            color: '#BCAAA4',
            contrast: 'black',
        },
        shade300: {
            color: '#A1887F',
            contrast: 'white',
        },
        shade400: {
            color: '#8D6E63',
            contrast: 'white',
        },
        shade500: {
            color: '#795548',
            contrast: 'white',
        },
        shade600: {
            color: '#6D4C41',
            contrast: 'white',
        },
        shade700: {
            color: '#5D4037',
            contrast: 'white',
        },
        shade800: {
            color: '#4E342E',
            contrast: 'white',
        },
        shade900: {
            color: '#3E2723',
            contrast: 'white',
        },
    },
    gray: {
        shade50: {
            color: '#FAFAFA',
            contrast: 'black',
        },
        shade100: {
            color: '#F5F5F5',
            contrast: 'black',
        },
        shade200: {
            color: '#EEEEEE',
            contrast: 'black',
        },
        shade300: {
            color: '#E0E0E0',
            contrast: 'black',
        },
        shade400: {
            color: '#BDBDBD',
            contrast: 'black',
        },
        shade500: {
            color: '#9E9E9E',
            contrast: 'black',
        },
        shade600: {
            color: '#757575',
            contrast: 'white',
        },
        shade700: {
            color: '#616161',
            contrast: 'white',
        },
        shade800: {
            color: '#424242',
            contrast: 'white',
        },
        shade900: {
            color: '#212121',
            contrast: 'white',
        },
    },
    blueGray: {
        shade50: {
            color: '#ECEFF1',
            contrast: 'black',
        },
        shade100: {
            color: '#CFD8DC',
            contrast: 'black',
        },
        shade200: {
            color: '#B0BEC5',
            contrast: 'black',
        },
        shade300: {
            color: '#90A4AE',
            contrast: 'black',
        },
        shade400: {
            color: '#78909C',
            contrast: 'white',
        },
        shade500: {
            color: '#607D8B',
            contrast: 'white',
        },
        shade600: {
            color: '#546E7A',
            contrast: 'white',
        },
        shade700: {
            color: '#455A64',
            contrast: 'white',
        },
        shade800: {
            color: '#37474F',
            contrast: 'white',
        },
        shade900: {
            color: '#263238',
            contrast: 'white',
        },
    },
    black: {
        shade: {
            color: 'black',
            contrast: 'white',
        },
    },
    white: {
        shade: {
            color: 'white',
            contrast: 'black',
        },
    },
};
