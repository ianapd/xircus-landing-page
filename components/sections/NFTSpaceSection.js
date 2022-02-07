import { Box, Container, Stack, Heading, Text} from "@chakra-ui/react";
import { GradientCard } from "../GradientCard";
import { nftRowStackStyle, nftSpaceContainerStyle, radiusBox, rowStackStyle, typoStyle, verticalStackStyle } from "../../styles/globalStyle";

export const NFTSpaceSection = ({ cardItems = [], translation, cardsTranslation }) => (
  <Box>
    <Container {...nftSpaceContainerStyle}>
      <Stack {...verticalStackStyle}>
        <Heading {...typoStyle.headline.sectionHeadline}>{translation('headline')}</Heading>
        <Text {...typoStyle.text.nftSpaceText}>{translation('subHeadline')}</Text>
        <Stack {...nftRowStackStyle}>
          {cardItems.map((item, itemKey) => (
            <GradientCard key={itemKey} translation={cardsTranslation} {...item} />
          ))}
        </Stack>
        <Box {...radiusBox}>
          <Text {...typoStyle.text.boxText}>"{translation('nftText')}"</Text>
        </Box>
      </Stack>
    </Container>  
  </Box>
)