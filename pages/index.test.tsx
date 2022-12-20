import React from "react";
import { act } from "react-dom/test-utils";
import { createRoot } from 'react-dom/client'
// import { render } from '@testing-library/react'
import Home from './index'

describe("Home", function() {
  it('should check that input is empty', () => {
    let container = document.createElement('div');
    const root = createRoot(container)
    act(() => {
      root.render(<Home />)
    })
    const text = container.querySelector('p[data-testid="new-link"]')
    expect(text?.textContent).toBe("bit.ly/..")
  })
})
