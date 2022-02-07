import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { productBoxStyle, productImageStyle, typoStyle } from "../styles/globalStyle";

export const ProductsCard = ({ img, title, subtitle, translation }) => (
  <Box {...productBoxStyle}>
    <Img src={img} {...productImageStyle} />
    <Heading {...typoStyle.title.productsTitle}>{translation(title)}</Heading>
    <Text {...typoStyle.subtitle.productsSubTitle}>{translation(subtitle)}</Text>
  </Box>
)