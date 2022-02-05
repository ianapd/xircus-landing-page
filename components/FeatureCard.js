import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { featureBoxStyle, featureImageStyle, typoStyle } from "../styles/globalStyle";

export const FeatureCard = ({ img, title, subtitle }) => (
  <Box {...featureBoxStyle}>
    <Img src={img} {...featureImageStyle} />
    <Heading {...typoStyle.title.productsTitle}>{title}</Heading>
    <Text {...typoStyle.subtitle.productsSubTitle}>{subtitle}</Text>
  </Box>
)