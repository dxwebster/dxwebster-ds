import { styled } from '@stitches/react'

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

    '&:first-child': {
      borderTopLeftRadius: '8px',
      borderBottomLeftRadius: '8px',
    },

    '&:last-child': {
      borderTopRightRadius: '8px',
      borderBottomRightRadius: '8px',
    },
  },

  '& tbody tr:nth-child(even) td': {
    background: '#444',
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
