import { Box, Container, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Img, Divider } from "@chakra-ui/react";
import { dividerHorizontalTabsStyle, horizontalTabsBoxStyle, horizontalTabsContainerStyle, horizontalTabsStyle, tabsStyle, tabStyle, typoStyle, verticalTabsStyle } from "../../styles/globalStyle";

export const HorizontalTabsSection = ({ tabItems=[], translation }) => (
  <Box {...horizontalTabsBoxStyle}>
    <Container {...horizontalTabsContainerStyle} centerContent>
      <Heading {...typoStyle.headline.tabsHeadline}>{translation('headline')}</Heading>
      <Tabs {...horizontalTabsStyle} display={{ base: 'none', lg: 'grid' }}>
        <TabList>
          {tabItems.map((item, i) => (
            <Box>
              <Tab {...typoStyle.title.tabsTitle}>{item.tab}</Tab>
              <Divider {...dividerHorizontalTabsStyle} />
            </Box>
          ))}
        </TabList>
        <TabPanels>
          {tabItems.map((item, i) => (
            <TabPanel>
              <Img src={item.img} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Tabs {...verticalTabsStyle} display={{ base: 'flex', lg: 'none' }}>
        <TabList>
          {tabItems.map((item, i) => (
            <Box>
              <Tab {...tabStyle} {...typoStyle.title.tabsTitle}>{item.tab}</Tab>
            </Box>
          ))}
        </TabList>
        <TabPanels>
          {tabItems.map((item, i) => (
            <TabPanel>
              <Img src={item.img} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Container>
  </Box>
)