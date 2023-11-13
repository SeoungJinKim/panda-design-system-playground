import { css } from '@seongjin/styled-system/css'
import React from 'react'

export function Button({ children }) {
  return (
    <button type='button' className={css({ bg: 'red.300', px: '2', py: '3' })}>
      {children}
    </button>
  )
}
