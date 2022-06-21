import Layout from "../../components/Layout"
import List from "../../components/List"
import { search } from "../api"

export default function News(props) {
    return(
      <Layout>
        <List {...props} />
      </Layout>
    )
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getServerSideProps({  params }) {
  const results = await search(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`
  )
  return { props: { results } }

}
