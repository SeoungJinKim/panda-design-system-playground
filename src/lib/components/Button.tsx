import { PropsWithChildren } from 'react'
import { css } from '@seongjin/styled-system/css'

interface Props extends PropsWithChildren {}

const Button = ({ children }: Props) => {
  return (
    <button
      type='button'
      className={css({ color: 'white', bg: 'primary', px: '12', py: '5' })}
    >
      {children}
    </button>
  )
}

export default Button
