import { Box, Container, Grid, GridItem, Heading, Img, Text } from "@chakra-ui/react";
import { ProductsCard } from "../ProductsCard";
import { productBoxStyle, productImageStyle, productsContainerStyle, productsGridStyle, typoStyle } from "../../styles/globalStyle";

export const ProductsSection = ({ products=[] }) => (
  <Box>
    <Container {...productsContainerStyle}>
      <Heading {...typoStyle.headline.productsHeadline}>Products</Heading>
      <Grid {...productsGridStyle}>
        {products.map((item, i) => (
          <ProductsCard key={i} {...item} />
        ))}
      </Grid>
    </Container>
  </Box>
)