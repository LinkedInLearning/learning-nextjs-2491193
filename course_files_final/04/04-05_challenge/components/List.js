
export default function List({ results, title }) {
    return(
    <main>
      <h1>{title}</h1>
      <ul>
        {results?.map(({title, url, uri, img }) => {
          return(
            <li key={uri}>
              {/* Image */}
              <a href={url} rel="noreferrer nofollower">
                {title}
              </a>
            </li>)
        })}
      </ul>
    </main>)
}