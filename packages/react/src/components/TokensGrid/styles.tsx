import { styled } from '../../styles/custom'

export const StyledTokensGrid = styled('table', {
  width: '100%',
  fontFamily: 'sans-serif',
  color: '#FFF',
  borderCollapse: 'collapse',
  border: 'none',

  '& thead th': {
    padding: '0.75rem 1rem',
    textAlign: 'left',
  },

  '& tbody td': {
    padding: '0.75rem 1rem',
    color: '#ccc',
  },

  '& tbody tr:nth-child(even) td': {
    background: '#dfdfdf',
  },

  variants: {
    hasRemValue: {
      true: {
        '& td:last-child': {
          display: 'table-cell',
        },
      },
    },
  },

  defaultVariants: {
    hasRemValue: false,
  },
})
