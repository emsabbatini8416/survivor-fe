import React from 'react'

const ShoppingLazy = React.lazy(() => import('./shopping'))

const Shopping = () => (
  <React.Suspense fallback={null}>
    <ShoppingLazy />
  </React.Suspense>
)

export { Shopping }
