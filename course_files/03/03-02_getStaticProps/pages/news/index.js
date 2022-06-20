import Layout from "../../components/Layout"
export default function News() {
    return(
      <Layout>
        <h1>Top Stories</h1>
      </Layout>)
}

const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getStaticProps() {
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {}
  }
}