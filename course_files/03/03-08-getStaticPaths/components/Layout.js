
import Link from "next/link"

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
        }
      ];
    return(
        <>
         {links.map(link => {
            return <Link href={link.path}><a>{link.title}{" "}</a></Link>;
         })}
          {children}
        </>
    )
}