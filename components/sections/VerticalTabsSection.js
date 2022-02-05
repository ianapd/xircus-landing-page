import { Box, Container, Divider, Heading, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { coloredTabStyle, typoStyle, verticalTabsContainerStyle, verticalTabsStyle } from "../../styles/globalStyle";

export const VerticalTabsSection = ({ tabItems=[] }) => (
  <Box>
    <Container {...verticalTabsContainerStyle} centerContent>
      <Heading {...typoStyle.headline.tabsHeadline}>What Can You Deploy?</Heading>
      <Tabs {...verticalTabsStyle}>
        <TabList>
          {tabItems.map((item, i) => (
            <Box>
              <Tab {...coloredTabStyle} {...typoStyle.title.tabsTitle}>{item.tab}</Tab>
              <Divider />
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