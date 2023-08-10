import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@dxwebster-ds/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

// informar os tokens que vamos declarar para a aplicação
const themeStitches = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
}

// extende o mapeamento padrão de temas do stitches
// customiza tokens padrão de propriedades css adicionando. Ex: o token 'space' por padrão é usado para margins e paddings, mas eu posso declarar que quero usá-lo como valor de 'height' e 'width' também.
const themeMapStitches = {
  ...defaultThemeMap,
  height: 'space',
  width: 'space',
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: themeStitches,
  themeMap: themeMapStitches,
})
