import axios from 'axios'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>WebDev News</title>
        <meta name="keywords"
          content="web development, programming" />
      </Head>
      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=200`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}