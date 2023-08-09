import { ComponentProps, ElementType } from 'react'

import { styled } from '../../styles'

// usa a function styled() que retorna os tokens configurados pelo stitches
const Text = styled('p', {
  fontFamily: '$default',
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'

export { Text }
