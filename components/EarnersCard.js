import { Box, Stack, Heading, Text } from "@chakra-ui/react"
import { earnCardHorizontalStackStyle, earnCardVerticalStackStyle, earnerBox, grayBoxStyle, horizontalStackStyle, typoStyle, verticalStackStyle } from "../styles/globalStyle"

export const EarnersCard = ({ title, subtitle, translation }) => (
  <Box {...earnerBox}>
    <Stack {...earnCardHorizontalStackStyle}>
      <Box {...grayBoxStyle} />
      <Stack {...earnCardVerticalStackStyle} flex={1}>
        <Heading {...typoStyle.title.earnersTitle}>{translation(title)}</Heading>
        <Text {...typoStyle.subtitle.earnersSubTitle}>{translation(subtitle)}</Text>
      </Stack>
    </Stack>
  </Box>
)