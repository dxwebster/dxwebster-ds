import type { Meta, StoryObj } from '@storybook/react'

import { Box, TextProps, Text } from '@dxwebster-ds/react'

// configuração global do componente
export default {
  title: 'Layout/Box',
  component: Box,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TextProps>

// configuração de cada estado do componente (variações)
export const Primary: StoryObj<TextProps> = {}
