import Image from "next/image"
import styles from "../styles/List.module.css"

export default function List({ results, title }) {

    return(
    <main>
      <h1>{title}</h1>
      <ul className={styles.list}>
        {results?.map(({title, url, uri, img }) => {
          return(
            <li  className={styles.card} key={uri}>
              {/* Image */}
              <a href={url} rel="noreferrer nofollower">
                {title}
              </a>
            </li>)
        })}
      </ul>
    </main>)
}