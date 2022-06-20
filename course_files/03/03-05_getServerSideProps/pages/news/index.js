import Layout from "../../components/Layout"
import { handler } from "../api"

export default function News({ results }) {
    return(
      <Layout>
        <h1>Top Stories</h1>
        <ul>
            {results.map(result => {
              return(<li key={result.uri}><a href={result.url} target="_blank" rel="noopener norefferer">{result.title}</a></li>)
            })}
        </ul>
      </Layout>
    )
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getStaticProps() {

  const results = await handler(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  )
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results
    }
  }
}