import { HeaderPage, WrapperPage } from 'layouts'
import { Card, PageContent } from './components'
import { useGetReports } from './dashboard.utils'

const Dashboard = () => {
  const { infected, nonInfected } = useGetReports()
  return (
    <WrapperPage>
      <HeaderPage
        title="Reports"
        subtitle="Your camp has grown +5% this month"
      />
      <PageContent>
        <Card
          title="Number of Healthy Survivors"
          value={nonInfected.toString()}
        />
        <Card
          title="Number of Infected Survivors"
          value={infected.toString()}
        />
        <Card title="Average Resource Allocation" value="Food" />
      </PageContent>
    </WrapperPage>
  )
}

export default Dashboard
