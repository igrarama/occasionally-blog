import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/layout'
import Head from 'next/head'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>About me</title>
        </Head>
        <Container>
          <Header />
          <div>about...</div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
