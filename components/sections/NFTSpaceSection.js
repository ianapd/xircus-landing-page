import { Box, Container, Stack, Heading, Text} from "@chakra-ui/react";
import { GradientCard } from "../GradientCard";
import { horizontalStackStyle, nftRowStackStyle, nftSpaceContainerStyle, radiusBox, rowStackStyle, typoStyle, verticalStackStyle } from "../../styles/globalStyle";

export const NFTSpaceSection = ({ cardItems = [] }) => (
  <Box>
    <Container {...nftSpaceContainerStyle}>
      <Stack {...verticalStackStyle}>
        <Heading {...typoStyle.headline.sectionHeadline}>Take full control of the NFT Space</Heading>
        <Text {...typoStyle.text.nftSpaceText}>Built on mulitple chains, NFT marketplaces that are deployed, owned and governed by YOU</Text>
        <Stack {...nftRowStackStyle}>
          {cardItems.map((item, itemKey) => (
            <GradientCard key={itemKey} {...item} />
          ))}
        </Stack>
        <Box {...radiusBox}>
          <Text {...typoStyle.text.boxText}>"NFTs make the internet ownable because you can create digital scarcity.We're just <br/>scratching the surface of whatthe Web 3.0 creator and collector economy is going to be"</Text>
        </Box>
      </Stack>
    </Container>  
  </Box>
)