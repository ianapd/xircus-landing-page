import { Box, Img, Text, VStack, Container } from "@chakra-ui/react";
import { gradientCardContainerStyle, gradientCardStackStyle, gradientCardStyle, gradientImageStyle, typoStyle, verticalStackStyle } from "../styles/globalStyle";

export const GradientCard = ({ img, text }) => (
  <Box {...gradientCardStyle}>
    <Container {...gradientCardContainerStyle}>
      <VStack {...gradientCardStackStyle}>
        <Box>
          <Img src={img} {...gradientImageStyle} pos="absolute" />
        </Box>
        <Box pos="relative">
          <VStack>
            <Text {...typoStyle.text.gradientCardText}>{text}</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  </Box>
)