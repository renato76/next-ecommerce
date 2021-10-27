import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import fetchApi from '../framework/shopify/utils/fetch-api';
import { Layout } from "@components/common"
import { ProductCard } from "@components/product";

// getStaticProps pre-renders the page at build time
export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

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

  return (
    <div>
      {products.slice(0,3).map(product => 
        <ProductCard 
          key={product.id}
          product={product}
        />
      )}
    </div>
  )
}

Home.Layout = Layout
