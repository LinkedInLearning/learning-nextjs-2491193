import Head from 'next/head'
import Layout from "../../components/Layout"
import { handler } from "../api";

function News({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>{title}</h1>
          <ul>
            {results?.map(result => <li><a href={result.url} rel="noreferrer nofollower">{result.title}</a></li>)}
          </ul>
        </main>
    </Layout>);
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { path: 'top-stories' } }, 
      { params: { path: 'popular' } }
    ],
    fallback: true // false or 'blocking'
  };
}
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getStaticProps({ params }) {
  const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  const POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`


   // The value of the `props` key will be
  //  passed to the `Home` component
  switch(params.path) {
    case 'top-stories':
      return {
        props: {
          results : await handler(TOP_STORIES_URL),
          title: "Top Stories" 
        }
      }
    case 'popular':
      return {
        props: {
          results : await handler(POPULAR_URL),
          title: "Popular" 
        }
      }

      default : {
        return {
          props: null
        }
      }
  }
}
export default News;
