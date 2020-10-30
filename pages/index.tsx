import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getPostBySlug } from '../lib/api'
import Head from 'next/head'
import Post from '../types/post'
import markdownToHtml from '../lib/markdownToHtml'

type Props = {
  heroPost: Post,
  morePosts: Post[]
}

const Index = ({ heroPost, morePosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Occasionally.</title>
        </Head>
        <Container>
          <Intro author={{ name: 'Ron Yoskovich', picture: '/assets/blog/authors/ron_2018.jpg' }} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              date={heroPost.date}
              slug={heroPost.slug}
              content={heroPost.content}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
  ])

  const heroPostContent = await markdownToHtml(getPostBySlug(allPosts[0].slug, ['content']).content || '')

  const heroPost = {
    ...allPosts[0],
    content: heroPostContent
  }
  const morePosts = allPosts.slice(1)

  return {
    props: {
      heroPost,
      morePosts
    },
  }
}
