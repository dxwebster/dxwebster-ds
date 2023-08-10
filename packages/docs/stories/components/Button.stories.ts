import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@dxwebster-ds/react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],

  // declaração das props padrão do componente e seus valores
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  // configuração dos controles das props padrão do componente
  argTypes: {
    variant: {
      // prop variant
      options: ['primary', 'secondary', 'tertiary'], // possíveis opções
      control: {
        type: 'inline-radio', // forma de controle (dropdown, radio, etc)
      },
    },
    size: {
      // prop size
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      // prop disabled
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      // prop onClick
      action: 'clicked', // ativa log de ação no console
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
