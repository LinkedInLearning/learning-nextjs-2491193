
import Link from "next/link"
import { useRouter } from "next/router"
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
      const router = useRouter();
      return(
          <div className={styles.container}>
           {links.map(link => {
              const className = link.path === router.asPath ? styles.active : styles.link;
              return <Link href={link.path}><a className={className} key={link.title}>{link.title}{" "}</a></Link>;
           })}
            {children}
          </div>
      )
}