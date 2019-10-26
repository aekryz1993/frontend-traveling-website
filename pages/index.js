import Layout from '../components/Layout'
import homeStyle from '../stylesheet/components/home.css'

export default () => (
  <Layout>
    <div>
      <div>
        <div className={homeStyle.bgLeft}></div>
      </div>
      <div className={homeStyle.container}>
        <h1 className={homeStyle.text}>Sands of time</h1>
      </div>
    </div>
  </Layout>
)