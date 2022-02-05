import { Box, Container, Grid } from "@chakra-ui/react";
import { featureSectionContainerStyle, featuresGridStyle } from "../../styles/globalStyle";
import { FeatureCard } from "../FeatureCard";

export const FeatureItemsSection = ({ features=[] }) => (
  <Box>
    <Container {...featureSectionContainerStyle}>
      <Grid {...featuresGridStyle}>
        {features.map((item, itemKey) => (
          <FeatureCard key={itemKey} {...item}/>
        ))}
      </Grid>
    </Container>
  </Box>
)