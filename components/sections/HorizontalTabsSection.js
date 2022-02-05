import { Box, Container, Heading, Tabs, TabList, Tab, TabPanels, TabPanel, Img } from "@chakra-ui/react";
import { horizontalTabsContainerStyle, horizontalTabsStyle, tabsStyle, tabStyle, typoStyle, verticalTabsStyle } from "../../styles/globalStyle";

export const HorizontalTabsSection = ({ tabItems=[] }) => (
  <Box>
    <Container {...horizontalTabsContainerStyle} centerContent>
      <Heading {...typoStyle.headline.tabsHeadline}>Easy Steps To Get Started</Heading>
      <Tabs {...horizontalTabsStyle} display={{ base: 'none', md: 'grid' }}>
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
      <Tabs {...verticalTabsStyle} display={{ base: 'flex', md: 'none' }}>
        <TabList>
          {tabItems.map((item, i) => (
            <Box>
              <Tab {...tabStyle} {...typoStyle.title.tabstitle}>{item.tab}</Tab>
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