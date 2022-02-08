import { Box, Heading, Img, Text } from "@chakra-ui/react";
import { featureBoxStyle, featureImageStyle, typoStyle } from "../styles/globalStyle";

export const FeatureCard = ({ img, title, subtitle, background, translation }) => (
  <Box {...featureBoxStyle} bgGradient={background}>
    <Img src={img} {...featureImageStyle} />
    <Heading {...typoStyle.title.productsTitle}>{translation(title)}</Heading>
    <Text {...typoStyle.subtitle.productsSubTitle}>{translation(subtitle)}</Text>
  </Box>
)