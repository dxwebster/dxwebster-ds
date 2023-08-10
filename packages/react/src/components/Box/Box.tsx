import { ComponentProps, ElementType } from 'react'

import { styled } from '../../styles/custom'

// usa a function styled() que retorna os tokens configurados pelo stitches
const Box = styled('div', {
  fontFamily: '$default',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'

export { Box }
