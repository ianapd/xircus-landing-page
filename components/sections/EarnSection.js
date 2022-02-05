import { Box, Container, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { earnersGridStyle, earnSectionContainerStyle, typoStyle } from "../../styles/globalStyle";
import { EarnersCard } from "../EarnersCard";

export const EarnSection = ({ earners=[], translation }) => (
  <Box>
    <Container {...earnSectionContainerStyle} centerContent>
      <Heading {...typoStyle.headline.sectionHeadline}>{translation('headline')}</Heading>
      <Text {...typoStyle.text.earnText}>{translation('subHeadline')}</Text>
      <Grid {...earnersGridStyle}>
        {earners.map((item, itemKey) => (
          <EarnersCard key={itemKey} {...item}/>
        ))}
      </Grid>
    </Container>
  </Box>
)