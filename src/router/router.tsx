import { Route, Routes as Switch } from 'react-router-dom'
import { LayoutPage } from 'layouts'
import Routes from './routes'
import { Dashboard, Inventory } from 'pages'
import Survivors from 'pages/survivors'

const Router = () => (
  <Switch>
    <Route element={<LayoutPage />}>
      <Route path={Routes.ROOT} element={<Dashboard />} index={true} />
      <Route path={Routes.SURVIVOR} element={<Survivors />} />
      <Route path={Routes.ITEMS} element={<Inventory />} />
    </Route>
    <Route path="*" element={<div>Page not Found!!!</div>} />
  </Switch>
)

export default Router
