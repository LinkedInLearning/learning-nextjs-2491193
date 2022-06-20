
import Link from "next/link"

export default function Layout({ children }) {
    return(
        <>
         <Link href="/"><a>Home</a></Link>
          {children}
        </>
    )
}