import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { productBoxStyle, productImageStyle, typoStyle } from "../styles/globalStyle";

export const ProductsCard = ({ img, title, subtitle }) => (
  <Box {...productBoxStyle}>
    <Img src={img} {...productImageStyle} />
    <Heading {...typoStyle.title.productsTitle}>{title}</Heading>
    <Text {...typoStyle.subtitle.productsSubTitle}>{subtitle}</Text>
  </Box>
)