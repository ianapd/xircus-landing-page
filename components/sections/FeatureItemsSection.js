import { Box, Container, Grid } from "@chakra-ui/react";
import { featureSectionContainerStyle, featuresGridStyle } from "../../styles/globalStyle";
import { FeatureCard } from "../FeatureCard";

export const FeatureItemsSection = ({ features=[], cardsTranslation }) => (
  <Box>
    <Container {...featureSectionContainerStyle}>
      <Grid {...featuresGridStyle}>
        {features.map((item, itemKey) => (
          <FeatureCard key={itemKey} translation={cardsTranslation} {...item}/>
        ))}
      </Grid>
    </Container>
  </Box>
)