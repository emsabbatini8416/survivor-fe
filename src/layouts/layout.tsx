import { Outlet } from 'react-router-dom'
import { NavBar } from 'components'
import { Container, Layout } from './styles'

const LayoutPage = () => (
  <Layout>
    <NavBar />
    <Container>
      <Outlet />
    </Container>
  </Layout>
)

export default LayoutPage
