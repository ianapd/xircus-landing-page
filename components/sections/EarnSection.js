import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { earnersGridStyle, earnSectionContainerStyle, typoStyle } from "../../styles/globalStyle";
import { EarnersCard } from "../EarnersCard";

export const EarnSection = ({ earners=[] }) => (
  <Box>
    <Container {...earnSectionContainerStyle} centerContent>
      <Heading {...typoStyle.headline.sectionHeadline}>How to Earn?</Heading>
      <Text {...typoStyle.text.earnText}>Unleash the power of decentralized NFT marketplaces</Text>
      <Grid {...earnersGridStyle}>
        {earners.map((item, itemKey) => (
          <EarnersCard key={itemKey} {...item}/>
        ))}
      </Grid>
    </Container>
  </Box>
)