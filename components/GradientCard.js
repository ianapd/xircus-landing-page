import { Box, Img, Stack, Text, VStack } from "@chakra-ui/react";
import { gradientCardStyle, gradientImageStyle, typoStyle, verticalStackStyle } from "../styles/globalStyle";

export const GradientCard = ({ img, text }) => (
  <Box {...gradientCardStyle}>
    <Stack {...verticalStackStyle}>
      <Box>
        <Img src={img} bottom={1} {...gradientImageStyle} />
      </Box>
      <Text {...typoStyle.text.gradientCardText}>{text}</Text>
    </Stack>
  </Box>
)