import React from 'react'

const DashboardLazy = React.lazy(() => import('./dashboard'))

const SurvivorsLazy = React.lazy(() => import('./survivors'))

const InventoryLazy = React.lazy(() => import('./inventory'))

const Dashboard = () => (
  <React.Suspense fallback={null}>
    <DashboardLazy />
  </React.Suspense>
)

const Survivors = () => (
  <React.Suspense fallback={null}>
    <SurvivorsLazy />
  </React.Suspense>
)

const Inventory = () => (
  <React.Suspense fallback={null}>
    <InventoryLazy />
  </React.Suspense>
)

export { Dashboard, Survivors, Inventory }
