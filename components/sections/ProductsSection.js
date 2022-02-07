import { Box, Container, Grid, GridItem, Heading, Img, Text } from "@chakra-ui/react";
import { ProductsCard } from "../ProductsCard";
import { productBoxStyle, productImageStyle, productsContainerStyle, productsGridStyle, typoStyle } from "../../styles/globalStyle";

export const ProductsSection = ({ products=[], translation, cardsTranslation }) => (
  <Box>
    <Container {...productsContainerStyle}>
      <Heading {...typoStyle.headline.productsHeadline}>{translation('headline')}</Heading>
      <Grid {...productsGridStyle}>
        {products.map((item, i) => (
          <ProductsCard key={i} translation={cardsTranslation} {...item} />
        ))}
      </Grid>
    </Container>
  </Box>
)