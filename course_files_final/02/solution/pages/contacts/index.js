import Link from 'next/link'
import Layout from "../../components/Layout"
import contacts from "../api/contacts"

export default function Contacts() {
    return(
    <Layout>
    <ul>
        {contacts.map(contact => {
           return(
            <li>
                <Link href={`contacts/${contact.id}`}>
                    <a>{contact.name}</a>
                </Link>
           </li>)
        })}
    </ul>
    </Layout>)
}