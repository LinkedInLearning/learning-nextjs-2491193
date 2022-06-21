
import Link from "next/link"
import styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
    const links = [
        {
            title: "Home", 
            path: "/"
        }, 
        {
          title: "Top Stories", 
          path: "/news/top-stories"
        }, 
        {
          title: "Popular", 
          path: "/news/popular"
        }, 
        {
          title: "Sections", 
          path: "/sections"
        }
      ];
      return(
          <div className={styles.container}>
           {links.map(link => {
              return <Link href={link.path}><a key={link.title}>{link.title}{" "}</a></Link>;
           })}
            {children}
          </div>
      )
}