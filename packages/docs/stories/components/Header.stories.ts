import { Header, HeaderProps } from '@dxwebster-ds/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HeaderProps>

export const LoggedIn: StoryObj<HeaderProps> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: StoryObj<HeaderProps> = {}
