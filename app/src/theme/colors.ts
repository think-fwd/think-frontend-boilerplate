/* eslint-disable import/no-anonymous-default-export */
export const ExtendedPaletteColors = {
  // extended blue
  '$color-extended-blue1': '#57B6FF',
  '$color-extended-blue2': '#8CCBFF',
  '$color-extended-blue3': '#BBDEFF',
  '$color-extended-blue4': '#D4EAFF',
  '$color-extended-blue5': '#EDF6FF',
  // extended yellow
  '$color-extended-yellow1': '#FFB829',
  '$color-extended-yellow2': '#FFD85C',
  '$color-extended-yellow3': '#FFE28A',
  '$color-extended-yellow4': '#FFEDB7',
  '$color-extended-yellow5': '#FFF9E3',
  // extended red
  '$color-extended-red1': '#ED6D47',
  '$color-extended-red2': '#EF8767',
  '$color-extended-red3': '#F3A892',
  '$color-extended-red4': '#F8CABC',
  '$color-extended-red5': '#F8E8E7',
  // extended green
  '$color-extended-green1': '#01BFA5',
  '$color-extended-green2': '#6DD2C0',
  '$color-extended-green3': '#AAE3D8',
  '$color-extended-green4': '#DDF4F0',
  '$color-extended-green5': '#F5FFFD',
  // extended purple
  '$color-extended-purple1': '#585BF5',
  '$color-extended-purple2': '#787BF8',
  '$color-extended-purple3': '#A1A1F9',
  '$color-extended-purple4': '#C8C6FB',
  '$color-extended-purple5': '#E9E8FE',
}

export default {
  // Actions
  '$color-action-background-primary-default': '#4070F4', // AZUL PRIMÁRIO 400
  '$color-action-background-primary-hover': '#6c8bf6', // AZUL PRIMÁRIO 300
  '$color-action-background-primary-pressing': '#0055f0', // AZUL PRIMÁRIO 500
  '$color-action-background-primary-disabled': '#E6E8F0', // AZUL SECUNDÁRIO 50
  '$color-action-background-secundary-default': '#FFFFF', // NEUTRO 0
  '$color-action-background-secundary-hover': '#E8EBFE', // AZUL PRIMÁRIO 50
  '$color-action-background-secundary-pressing': '#c4cdfb', // AZUL PRIMÁRIO 100
  '$color-action-link': '#4070F4', // AZUL PRIMÁRIO 400
  '$color-action-text-primary': '#FFFFF', // NEUTRO 0
  '$color-action-text-secundary': '#4070F4', // AZUL PRIMÁRIO 400
  '$color-action-border': '#4070F4', // AZUL PRIMÁRIO 400
  '$color-action-placeholder': '#BCBDBF', // NEUTRO 400

  // Text
  '$color-text-primary': '#202122', // AZUL SECUNDÁRIO 900
  '$color-text-secundary': '#606162', // NEUTRO 600
  '$color-text-tertiary': '#9D9E9F', // NEUTRO 500
  '$color-text-light': '#FFFFFF', // NEUTRO 0

  // Border
  '$color-border-primary': '#E6E8F0', // AZUL SECUNDÁRIO 50
  '$color-border-secundary': '#DFE0E2', // NEUTRO 300
  '$color-border-tertiary': '#BCBDBF', // NEUTRO 400
  '$color-border-light': '#FFFFFF', // NEUTRO 0
  '$color-border-dark': '#606162', // NEUTRO 600

  // Background
  '$color-background-primary': '#F9FAFC', // NEUTRO 50
  '$color-background-secundary': '#FFFFFF', // NEUTRO 0
  '$color-background-tertiary': '#F4F5F7', // NEUTRO 100
  '$color-background-dark': '#091440', // AZUL SECUNDÁRIO 900
  '$color-background-alternative': '#6D7FAC', // AZUL SECUNDÁRIO 300
  '$color-background-alternative-dark': '#66729A', // AZUL SECUNDÁRIO 300
  '$color-background-alternative-light': '#E5E5F1', // AZUL SECUNDÁRIO 50

  // Semantic
  '$color-semantic-success': '#0BB07C', // SEMÂNTICA 400
  '$color-semantic-successlight': '#E2F3EC', // SEMÂNTICA 50
  '$color-semantic-error': '#F03D3D', // SEMÂNTICA 600
  '$color-semantic-errorlight': '#FFECEF', // SEMÂNTICA 50
  '$color-semantic-warning': '#FFAD0D', // SEMÂNTICA 600
  '$color-semantic-warninglight': '#FFF7E1', // SEMÂNTICA 50
  '$color-semantic-message': '#5271FE', // SEMÂNTICA 400
  '$color-semantic-messagelight': '#E8ECFE', // SEMÂNTICA 50
  '$color-semantic-info': '#3C4C70', // SEMÂNTICA 400

  ...ExtendedPaletteColors,

  // OTHERS
  '$blue1-medium-dark': '4A8EFF',

  brand: {
    blue: '#4070F4',
    offwhite: '#F9FAFC',
    black: '#0A2156',
  },
  scale: {
    gray10: '#E7E9ED',
    gray20: '#CED2DB',
    gray30: '#B6BCC9',
    gray40: '#9EA5B8',
    gray50: '#858FA6',
    gray60: '#6D7994',
    gray70: '#556282',
    gray80: '#3C4C70',
    gray90: '#24365E',
    gray100: '#0B1F4D',
  },
  semantic: {
    support1: '#4070F4',
    support2: '#0BB07B',
    support3: '#FFAD0D',
    support4: '#F03D3D',
    support5: '#E7E9ED',
    error: {
      0: '#FFECEF',
      100: '#FFCFD4',
      200: '#F49D9E',
      300: '#EC7779',
      400: '#F75757',
      500: '#FE473D',
      600: '#F03D3D',
      700: '#D83336',
      800: '#CB2C2F',
      900: '#BC2023',
      light: '#FFECEF',
      main: '#F03D3D',
      dark: '#BC2023',
    },
    warning: {
      0: '#FFF7E1',
      100: '#FFEAB3',
      200: '#FFDD82',
      300: '#FFD150',
      400: '#FFC62B',
      500: '#FFBC11',
      600: '#FFAD0D',
      700: '#FE9B0E',
      800: '#FE8B0F',
      900: '#FD6B0F',
      light: '#FFF7E1',
      main: '#FFAD0D',
      dark: '#FD6B0F',
    },
    success: {
      0: '#E2F3EC',
      100: '#B8E2CF',
      200: '#88CFB0',
      300: '#51BE92',
      400: '#0BB07C',
      500: '#00A266',
      600: '#00945B',
      700: '#00824E',
      800: '#007142',
      900: '#00522C',
      light: '#E2F3EC',
      main: '#0BB07C',
      dark: '#00522C',
    },
    message: {
      0: '#E8ECFE',
      100: '#C4CDFB',
      200: '#9BAEF8',
      300: '#6C8CF6',
      400: '#4070F4',
      500: '#0054F0',
      600: '#004DE4',
      700: '#0042D8',
      800: '#0037CD',
      900: '#0022B5',
      light: '#E8ECFE',
      main: '#4070F4',
      dark: '#0022B5',
    },
  },
  muted: {
    contrastText: '#ffffff',
    main: '#6D7994', // $gray-60
    hint: '#B6BCC9', // $gray-30
    dark: '#3C4C70', // $gray-80
    light: '#e7e9ed', // $gray-10
  },
  background: {
    default: '#F9FAFC',
    paper: '#ffffff',
  },
  primary: {
    contrastText: '#ffffff',
    light: '#FEF5F8', // $brand-color-blue
    dark: '#330012', // $brand-color-blue
    main: '#E63372', // $brand-color-blue
  },
  secondary: {
    contrastText: '#ffffff',
    light: '#202122', // $gray-90
    dark: '#202122', // $gray-90
    main: '#24365E', // $gray-90
  },
  success: {
    contrastText: '#ffffff',
    light: '#0BB07B',
    dark: '#0BB07B',
    main: '#0BB07B',
  },
  error: {
    contrastText: '#ffffff',
    light: '#F03D3D',
    dark: '#F03D3D',
    main: '#F03D3D',
  },
}
