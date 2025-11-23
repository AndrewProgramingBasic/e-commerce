import Header from "@/components/header"
import Hero from "@/components/hero"
import Catalog from "@/components/catalog"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Catalog />
      <Newsletter />
      <Footer />
    </main>
  )
}
