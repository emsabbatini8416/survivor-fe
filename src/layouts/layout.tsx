import { NavBar } from 'components'
import { Container, Layout } from './styles'

const LayoutPage = ({ children }: React.PropsWithChildren<unknown>) => (
  <Layout>
    <NavBar />
    <Container>
      {children}
    </Container>
  </Layout>
)

export default LayoutPage
