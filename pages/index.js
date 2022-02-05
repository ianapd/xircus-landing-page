import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Head from 'next/head'

import imagesData from '../data/images.json'
import cardItemsData from '../data/cardItems.json'
import productsData from '../data/products.json'
import earnersData from '../data/earners.json'
import featureItemsData from '../data/featureItems.json'
import verticalTabItemsData from '../data/verticalTabItems.json'
import horizontalTabItemsData from '../data/horizontalTabItems.json'
import blockChainsData from '../data/blockChains.json'
import otherBlockChainsData from '../data/otherBlockChains.json'
import featureCardsData from '../data/featureCards.json'

import { Header } from '../components/Header'
import { MainSection } from '../components/sections/MainSection'
import { NFTSpaceSection } from '../components/sections/NFTSpaceSection'
import { ProductsSection } from '../components/sections/ProductsSection'
import { EarnSection } from '../components/sections/EarnSection'
import { FeatureItemsSection } from '../components/sections/FeatureItemsSection'
import { VerticalTabsSection } from '../components/sections/VerticalTabsSection'
import { HorizontalTabsSection } from '../components/sections/HorizontalTabsSection'
import { StackSection } from '../components/sections/StackSection'
import { CardsSlider } from '../components/sections/CardsSlider'
import { TwoColumnsSection } from '../components/sections/TwoColumnsSection'
import { Footer } from '../components/Footer'

export default function Home() {
  const [images, setImages] = useState(imagesData)
  const [cardItems, setCardItems] = useState(cardItemsData)
  const [products, setProducts] = useState(productsData)
  const [earners, setEarners] = useState(earnersData)
  const [features, setFeatures] = useState(featureItemsData)
  const [verticalTabItems, setVerticalTabItems] = useState(verticalTabItemsData)
  const [horizontalTabItems, setHorizontalTabItems] = useState(horizontalTabItemsData)
  const [blockChains, setBlockChains] = useState(blockChainsData)
  const [otherBlockChains, setOtherBlockChains] = useState(otherBlockChainsData)
  const [featureCards, setFeatureCards] = useState(featureCardsData)

  return (
    <Box>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;300;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" />
      <MainSection icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" images={images} />
      <NFTSpaceSection cardItems={cardItems} />
      <ProductsSection products={products} />
      <EarnSection earners={earners} />
      <FeatureItemsSection features={features} />
      <VerticalTabsSection tabItems={verticalTabItems} />
      <HorizontalTabsSection tabItems={horizontalTabItems}/>
      <StackSection blockChains={blockChains} otherBlockChains={otherBlockChains} />
      <CardsSlider featureCards={featureCards} />
      <TwoColumnsSection />
      <Footer />
    </Box>
  )
}
