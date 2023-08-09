import { Header } from '@dxwebster-ds/react'

export default {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut = {}
