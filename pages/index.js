import { Box, useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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
import { useTranslations } from "next-intl";
import { mainBoxStyle } from '../styles/globalStyle'

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
  const [slider, setSlider] = useState('')

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 4 },
  ]

  const headerTranslations = useTranslations('header')
  const mainSectionTranslations = useTranslations('mainSection')
  const nftSectionTranslations = useTranslations('nftSpaceSection')
  const productsSectionTranslations = useTranslations('productsSection')
  const earnSectionTranslations = useTranslations('earnSection')
  const verticalTabsSectionTranslations = useTranslations('verticalTabsSection')
  const horizontalTabsSectionTranslations = useTranslations('horizontalTabsSection')
  const stackSectionTranslations = useTranslations('stackSection')
  const cardsSliderSectionTranslations = useTranslations('cardsSliderSection')
  const twoColumnsSliderSectionTranslations = useTranslations('twoColumnsSection')
  const footerTranslations = useTranslations('footer')

  return (
    <Box bgImage="https://uce625883ba1efbd7b29e4324ee8.previews.dropboxusercontent.com/p/thumb/ABZ_m4zdNyi76m4AnhWHyBE6hDrx4qcm9DW0sTcgqbaTxTqj4ABN1Dr6Pzi6Vk7bwIy3eVcYAUV4UPXl3pH2NLgL6-FgNjpolpHlvo3kV8JdPNKGRgUkiVDpidbcgWCHnV6u4VzNqqS8LWMYcp08LsD8Mj7KD6NM_c9DJCs_xe69ww2MMM7qkjGgauVBuz0UEUn3RJemR7LuMmROPmZjW0jNWxMB-dfuDviDskQ5kNfVU2qE-PO0FBucdC_T-uyWT2JYOVGpLD5C3usm15skNvzr7CCNX8DUKwjBPMd5sp_HLtFYrMqmErZmM49s4rqyC7ypn16S5mZV4l7VTYhboVFemSH1daEynvxlksGRvBGQKrb9cKxh98JOgfLq7PfD1VA/p.png" {...mainBoxStyle}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;300;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" translation={headerTranslations} />
      <MainSection icon="https://icoholder.com/files/img/6f7203a158209cb2e9143d6631cbb7c2.png" images={images} translation={mainSectionTranslations} />
      <NFTSpaceSection cardItems={cardItems} translation={nftSectionTranslations} />
      <ProductsSection products={products} translation={productsSectionTranslations} />
      <EarnSection earners={earners} translation={earnSectionTranslations} />
      <FeatureItemsSection features={features} />
      <VerticalTabsSection tabItems={verticalTabItems} translation={verticalTabsSectionTranslations}/>
      <HorizontalTabsSection tabItems={horizontalTabItems} translation={horizontalTabsSectionTranslations} />
      <StackSection blockChains={blockChains} otherBlockChains={otherBlockChains} translation={stackSectionTranslations} />
      <CardsSlider featureCards={featureCards} translation={cardsSliderSectionTranslations} slider={slider} setSlider={setSlider} breakPoints={breakPoints} />
      <TwoColumnsSection translation={twoColumnsSliderSectionTranslations} />
      <Footer translation={footerTranslations} />
    </Box>
  )
}
