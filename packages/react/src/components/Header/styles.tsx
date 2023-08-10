import { styled } from '@/styles/custom'

export const StyledHeader = styled('header', {
  fontFamily: 'sans-serif',
  borderBottom: '1px solid #eee',
  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& svg': {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  '& h1': {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1,
    margin: '0.5rem 0 0.5rem 1rem',
    display: 'inline-block',
    verticalAlign: 'top',
  },
  '& button + button': {
    marginLeft: '1rem',
  },
  '& .welcome': {
    color: '#333',
    fontSize: '0.875rem',
    marginRight: '1rem',
  },
})
