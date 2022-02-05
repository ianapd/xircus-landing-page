import { Box, Img, Stack, Text } from "@chakra-ui/react";
import { gradientCardStyle, gradientImageStyle, typoStyle, verticalStackStyle } from "../styles/globalStyle";

export const GradientCard = ({ img, text }) => (
  <Box {...gradientCardStyle}>
    <Stack {...verticalStackStyle}>
      <Img src={img} {...gradientImageStyle} />
      <Text {...typoStyle.text.gradientCardText}>{text}</Text>
    </Stack>
  </Box>
)