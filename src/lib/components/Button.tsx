import { cva } from '@seongjin/styled-system/css'
import { styled } from '@seongjin/styled-system/jsx'

const button = cva({
  base: {
    padding: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  },

  variants: {
    size: {
      small: {
        fontSize: '14px',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '16px',
        padding: '8px 16px',
      },
      large: {
        fontSize: '18px',
        padding: '12px 24px',
      },
    },
    color: {
      primary: {
        backgroundColor: 'blue',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },

  // compound variants
  compoundVariants: [
    // apply when both small size and primary color are selected
    {
      size: 'small',
      color: 'primary',
      css: {
        border: '2px solid blue',
      },
    },
    // apply when both large size and secondary color are selected and the button is disabled
    {
      size: 'large',
      color: 'secondary',
      disabled: true,
      css: {
        backgroundColor: 'lightgray',
        color: 'darkgray',
        border: 'none',
      },
    },
    // apply when both small or medium size, and secondary color variants are applied
    {
      size: ['small', 'medium'],
      color: 'secondary',
      css: {
        fontWeight: 'extrabold',
      },
    },
  ],
})

// export type ButtonVariants = RecipeVariantProps<typeof button>

// interface Props extends PropsWithChildren {}

// const Button = ({ children }: Props) => {
//   return (
//     <button
//       type='button'
//       className={css({ color: 'white', bg: 'primary', px: '12', py: '5' })}
//     >
//       {children}
//     </button>
//   )
// }

export const Button = styled('button', button)

export default Button
