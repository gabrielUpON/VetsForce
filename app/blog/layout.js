import Nav from "@/components/Nav"
import Footer from "@/components/Footer"



export default function BlogLayout({ children }) {
  return (
    <>
      <Nav/>
      <main>{children}</main>
    </>
  )
}