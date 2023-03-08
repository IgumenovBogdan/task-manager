import {createTheme} from '@material-ui/core/styles';
import {get} from "lodash";

const baseSpacingValue = 16;
const baseFontsizeValue = 16;
const baseRadiusValue = 8;

const tokens = {
    spacing: {
        null: { value: '0', type: 'spacing' },
        xxxxxs: { value: '2px', type: 'spacing' },
        xxxxs: { value: '3px', type: 'spacing' },
        xxxs: { value: baseSpacingValue*0.25 + 'px', type: 'spacing' },
        xxs: { value: baseSpacingValue*0.5 + 'px', type: 'spacing' },
        xs: { value: '14px', type: 'spacing' },
        base: { value: baseSpacingValue + 'px', type: 'spacing' },
        m: { value: baseSpacingValue*1.5 + 'px', type: 'spacing' },
        l: { value: baseSpacingValue*2 + 'px', type: 'spacing' },
        xl: { value: baseSpacingValue*4 + 'px', type: 'spacing' },
    },
    fontsize: {
        base: { value: baseFontsizeValue + 'px', type: 'fontSizes' },
        l: { value: baseSpacingValue*1.5 + 'px', type: 'fontSizes' },
        lx: { value: baseSpacingValue*3 + 'px', type: 'fontSizes' },
        xxl: { value: '64px', type: 'fontSizes' },
        xxxxl: { value: '124px', type: 'fontSizes' },
    },
    radius: {
        base: { value: baseRadiusValue + 'px', type: 'borderRadius' },
        m: { value: baseRadiusValue*2 + 'px', type: 'borderRadius' },
        l: { value: baseRadiusValue*4 + 'px', type: 'borderRadius' },
    },
    global: {
        "brand": {
            "value": "#95C1D5",
            "type": "color"
        },
        "white": {
            "value": "#ffffff",
            "type": "color"
        },
        "black": {
            "value": "#000000",
            "type": "color"
        },
        "Open Sans": {
            "value": "Open Sans",
            "type": "fontFamilies"
        },
        "regular": {
            "value": "Regular",
            "type": "fontWeights"
        },
        "semi_bold": {
            "value": 600,
            "type": "fontWeights"
        },
        "basic": {
            "1-grey": {
                "value": "#f8f8f8",
                "type": "color"
            },
            "2-grey": {
                "value": "#e8e8e8",
                "type": "color"
            },
            "3-grey": {
                "value": "#dfdfdf",
                "type": "color"
            },
            "4-grey": {
                "value": "#d8d8d8",
                "type": "color"
            },
            "5-grey": {
                "value": "#c3c3c3",
                "type": "color"
            },
            "6-grey": {
                "value": "#686868",
                "type": "color"
            },
            "7-grey": {
                "value": "#2a2a2a",
                "type": "color"
            }
        },
        "base": {
            "value": "100%",
            "type": "lineHeights"
        },
        "catcolors": {
            "blue": {
                "sky": {
                    "value": "#c0e2f9",
                    "type": "color"
                },
                "navy": {
                    "value": "#78a7c7",
                    "type": "color"
                }
            },
            "yellow": {
                "sunset": {
                    "value": "#dbb67f",
                    "type": "color"
                },
                "sicilian": {
                    "value": "#df9450",
                    "type": "color"
                }
            },
            "green": {
                "salat": {
                    "value": "#b1db7f",
                    "type": "color"
                },
                "grass": {
                    "value": "#50b35b",
                    "type": "color"
                }
            },
            "violet": {
                "space": {
                    "value": "#7977f1",
                    "type": "color"
                }
            }
        },
        "Inter": {
            "value": "Inter",
            "type": "fontFamilies"
        },
        "medium": {
            "value": 500,
            "type": "fontWeights"
        },
        "unactive": {
            "value": "0.2",
            "type": "opacity"
        }
    },
};

const theme = createTheme({
    palette: {
        background: {
            default: tokens.global.white.value, // set the default background color to #ffffff
        },
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptopFirst: 980,
            laptopSecond: 1070,
            desktopFirst: 1280,
            desktopSecond: 1500
        }
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontFamily: 'Inter',
            fontWeight: tokens.global.semi_bold.value, // or 'SemiBold' if you want to use a custom font weight name
        },
    },
    global: {
        "brand": {
            "value": "#95C1D5",
            "type": "color"
        },
        "white": {
            "value": "#ffffff",
            "type": "color"
        },
        "black": {
            "value": "#000000",
            "type": "color"
        },
        "Open Sans": {
            "value": "Open Sans",
            "type": "fontFamilies"
        },
        fontsize: (factor) => {
            return get(tokens, `fontsize.${factor}.value`, factor);
        },
        "regular": {
            "value": 400,
            "type": "fontWeights"
        },
        "semi_bold": {
            "value": 600,
            "type": "fontWeights"
        },
        "basic": {
            "1-grey": {
                "value": "#f8f8f8",
                "type": "color"
            },
            "2-grey": {
                "value": "#e8e8e8",
                "type": "color"
            },
            "3-grey": {
                "value": "#dfdfdf",
                "type": "color"
            },
            "4-grey": {
                "value": "#d8d8d8",
                "type": "color"
            },
            "5-grey": {
                "value": "#c3c3c3",
                "type": "color"
            },
            "6-grey": {
                "value": "#686868",
                "type": "color"
            },
            "7-grey": {
                "value": "#2a2a2a",
                "type": "color"
            }
        },
        "base": {
            "value": "100%",
            "type": "lineHeights"
        },
        spacing: (factor) => {
            return get(tokens, `spacing.${factor}.value`, factor);
        },
        radius: (factor) => {
            return get(tokens, `radius.${factor}.value`, factor);
        },
        "catcolors": {
            "blue": {
                "sky": {
                    "value": "#c0e2f9",
                    "type": "color"
                },
                "navy": {
                    "value": "#78a7c7",
                    "type": "color"
                }
            },
            "yellow": {
                "sunset": {
                    "value": "#dbb67f",
                    "type": "color"
                },
                "sicilian": {
                    "value": "#df9450",
                    "type": "color"
                }
            },
            "green": {
                "salat": {
                    "value": "#b1db7f",
                    "type": "color"
                },
                "grass": {
                    "value": "#50b35b",
                    "type": "color"
                }
            },
            "violet": {
                "space": {
                    "value": "#7977f1",
                    "type": "color"
                }
            }
        },
        "Inter": {
            "value": "Inter",
            "type": "fontFamilies"
        },
        "Medium": {
            "value": 500,
            "type": "fontWeights"
        },
        "unactive": {
            "value": "0.2",
            "type": "opacity"
        }
    },
    dark: {
        "bg": {
            "main": {
                "value": tokens.global.black.value,
                "type": "color"
            },
            "secondary": {
                "value": tokens.global.basic['5-grey'].value,
                "type": "color"
            },
            "thirdly": {
                "value": tokens.global.basic['6-grey'].value,
                "type": "color"
            },
            "fourthly": {
                "value": tokens.global.basic['7-grey'].value,
                "type": "color"
            }
        },
        "front": {
            "main": {
                "value": tokens.global.basic['2-grey'].value,
                "type": "color"
            },
            "secondary": {
                "value": tokens.global.basic['3-grey'].value,
                "type": "color"
            },
            "thirdly": {
                "value": tokens.global.basic['6-grey'].value,
                "type": "color"
            },
            "inversion": {
                "value": tokens.global.black.value,
                "type": "color"
            }
        }
    },
    light: {
        "bg": {
            "main": {
                "value": tokens.global.white.value,
                "type": "color"
            },
            "secondary": {
                "value": tokens.global.basic['3-grey'].value,
                "type": "color"
            },
            "thirdly": {
                "value": tokens.global.basic['2-grey'].value,
                "type": "color"
            },
            "fourthly": {
                "value": tokens.global.basic['1-grey'].value,
                "type": "color"
            }
        },
        "front": {
            "main": {
                "value": tokens.global.black.value,
                "type": "color"
            },
            "secondary": {
                "value": tokens.global.basic['5-grey'].value,
                "type": "color"
            },
            "thirdly": {
                "value": tokens.global.basic['7-grey'].value,
                "type": "color"
            },
            "inversion": {
                "value": tokens.global.white.value,
                "type": "color"
            }
        }
    },

});

export default theme;