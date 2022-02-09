import { Box, Container, Divider, Grid, Heading, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { coloredTabStyle, dividerVerticalTabsStyle, typoStyle, verticalTabsContainerStyle, verticalTabsStyle } from "../../styles/globalStyle";

export const VerticalTabsSection = ({ tabItems=[], translation, tabsTranslation }) => (
  <Box>
    <Container {...verticalTabsContainerStyle} centerContent>
      <Heading {...typoStyle.headline.tabsHeadline}>{translation('headline')}</Heading>
      <Tabs {...verticalTabsStyle}>
        <TabPanels>
          {tabItems.map((item, i) => (
            <TabPanel>
              <Img src={item.img} />
            </TabPanel>
          ))}
        </TabPanels>
        <TabList>
          {tabItems.map((item, i) => (
            <Box>
              <Tab {...coloredTabStyle} {...typoStyle.title.tabsTitle}>{tabsTranslation(item.tab)}</Tab>
              <Divider {...dividerVerticalTabsStyle} />
            </Box>
          ))}
        </TabList>
      </Tabs>
    </Container>
  </Box>
)