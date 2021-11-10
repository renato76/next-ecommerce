import React from 'react'
import { Layout } from "@components/common"
import { GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType } from 'next'

// fetch all product slugs or ids
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "cool-hat"}},
      { params: { slug: "t-shirt"}},
      { params: { slug: "lightweight-jacket"}}
    ],
    fallback: false
  }
}

// provide specific data to the page
export const getStaticProps = async ({ 
  params }: GetStaticPropsContext<{slug: string}>
) => {
  return {
    props: {
      product: {
        slug: params?.slug
      }
    }
  }
}

export default function ProductSlug({ 
  product }: InferGetServerSidePropsType<typeof getStaticProps>
  ) {
    return (
    <Layout>
      {product.slug}
    </Layout>
  )
}

