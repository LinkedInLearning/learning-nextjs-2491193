import Layout from "../../components/Layout"
import { search } from "../api"

export default function News() {
    return(
      <Layout>
        <h1>Search</h1>
      </Layout>
    )
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getServerSideProps({ params }) {
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {}
  }
}