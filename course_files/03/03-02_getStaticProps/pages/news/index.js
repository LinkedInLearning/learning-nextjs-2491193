import Layout from "../../components/Layout"

export default function News({ results }) {
    return(
      <Layout>
        <h1>Top Stories</h1>
      </Layout>
    )
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
  const response = await fetch(URL)
  const data = await response.json()
  console.log(data.results)
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      results : data.results
    }
  }
}