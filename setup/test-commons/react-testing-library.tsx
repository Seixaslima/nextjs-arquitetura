import { render as rtlRender } from '@testing-library/react'

function DefaltWrapper({ children }) {
  return children
}

export const custonRender = (AllThemePrivider = DefaltWrapper) => {
  return (ui, options = {}) => {
    return rtlRender(ui, { wrapper: AllThemePrivider, ...options })
  }
}

export * from '@testing-library/react'

export const render = () => console.error("please create your own render method")
