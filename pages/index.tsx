import type { InferGetStaticPropsType } from "next"
import getAllProducts from "../framework/shopify/product/get-all-products"

// getStaticProps pre-renders the page at build time
export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: {
      products
    },
    // revalidate the data every 4 hours
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  getAllProducts()

  return (
    <div>
      { JSON.stringify(products) }
    </div>
  )
}
