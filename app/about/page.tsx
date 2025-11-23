"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const values = [
  {
    name: "Pasión por la moda",
    content:
      "Creemos que la moda es una forma de expresión personal y nos apasiona ayudar a nuestros clientes a encontrar su estilo único.",
  },
  {
    name: "Excelencia en el servicio",
    content:
      "Nos comprometemos a brindar un servicio al cliente excepcional, con atención personalizada y soluciones rápidas a sus necesidades.",
  },
  {
    name: "Innovación constante",
    content:
      "Buscamos constantemente nuevas formas de mejorar la experiencia de compra de nuestros clientes, desde la selección de productos hasta el proceso de pago y envío.",
  },
  {
    name: "Compromiso social",
    content: "Somos una empresa responsable que se preocupa por el bienestar de sus empleados y la comunidad.",
  },
]

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <div className="flex flex-col mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
          <h1 className={`${playfair.className} mt-8 text-4xl mb-8 md:text-5xl lg:text-7xl text-center`}>
            ¿Quiénes Somos?
          </h1>

          {/* Main Section */}
          <section className="flex flex-wrap shadow-lg p-10 justify-center rounded-lg">
            <Image
              className="basis-full lg:basis-1/2 h-96 rounded-lg mb-10 lg:mb-0 object-cover"
              src="/StephanModa-women-fashion-collection.jpg"
              width={500}
              height={400}
              alt="StephanModa brand image"
            />
            <p className={`${inter.className} basis-full lg:basis-1/2 px-6 text-justify text-gray-700 leading-relaxed`}>
              StephanModa es una empresa de comercio electrónico que ofrece una amplia gama de ropa y accesorios para
              hombres y mujeres. Nacimos con la pasión por la moda y el deseo de brindar a nuestros clientes una
              experiencia de compra única, cómoda y segura. En StephanModa encontrarás las últimas tendencias en moda,
              así como prendas clásicas y atemporales que se ajustan a tu estilo y presupuesto.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mt-16">
            <h2 className={`${playfair.className} mb-8 text-4xl md:text-5xl lg:text-6xl text-center`}>
              Nuestra Misión
            </h2>
            <div className="flex flex-wrap shadow-lg p-10 justify-center rounded-lg">
              <p
                className={`${inter.className} basis-full lg:basis-1/2 px-6 text-justify text-gray-700 leading-relaxed`}
              >
                Nuestra misión es ser la tienda online de moda preferida por nuestros clientes, satisfaciendo sus
                necesidades con productos de alta calidad, precios competitivos y un servicio al cliente excepcional.
              </p>
              <Image
                className="basis-full lg:basis-1/2 h-96 rounded-lg mt-10 lg:mt-0 object-cover"
                src="/StephanModa-men-fashion-luxury-style.jpg"
                width={500}
                height={400}
                alt="StephanModa mission"
              />
            </div>
          </section>

          {/* Vision Section */}
          <section className="mt-16">
            <h2 className={`${playfair.className} mb-8 text-4xl md:text-5xl lg:text-6xl text-center`}>
              Nuestra Visión
            </h2>
            <div className="flex flex-wrap shadow-lg p-10 justify-center rounded-lg">
              <Image
                className="basis-full lg:basis-1/2 h-96 rounded-lg mb-10 lg:mb-0 object-cover"
                src="/fashion-luxury-accessories-premium.jpg"
                width={500}
                height={400}
                alt="StephanModa vision"
              />
              <p
                className={`${inter.className} basis-full lg:basis-1/2 px-6 text-justify text-gray-700 leading-relaxed`}
              >
                Ser la empresa líder en el mercado de comercio electrónico de moda en Latinoamérica, reconocida por su
                innovación, variedad y excelente atención al cliente.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mt-16">
            <h2 className={`${playfair.className} mb-8 text-4xl md:text-5xl lg:text-6xl text-center`}>
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((valor) => (
                <div key={valor.name} className="shadow-lg p-8 rounded-lg bg-gray-50 hover:shadow-xl transition-smooth">
                  <h3 className={`${playfair.className} text-2xl text-gray-900 mb-4`}>{valor.name}</h3>
                  <p className={`${inter.className} text-gray-700 leading-relaxed`}>{valor.content}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
