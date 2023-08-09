import type { Meta, StoryObj } from '@storybook/react'

import { Box, TextProps, Text } from '@dxwebster-ds/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
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

export const Primary: StoryObj<TextProps> = {}
