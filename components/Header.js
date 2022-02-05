import { Box, Container, Img, Stack, Heading, Spacer, Button, Select, IconButton } from "@chakra-ui/react";
import { horizontalStackStyle, navIconStyle, navHeadingStyle, navButtonStyle, navSelectStyle, navBoxStyle, containerStyle, typoStyle, navHorizontalStackStyle } from "../styles/globalStyle";
import Router from 'next/router'

export const Header = ({ icon, translation }) => (
  <Box>
    <Container {...containerStyle}>
       <Stack {...horizontalStackStyle} pos="fixed">
          <Img src={icon} {...navIconStyle} />
          <Heading {...typoStyle.title.navTitle}>{translation('name')}</Heading>
          <Spacer />
          <Box {...navBoxStyle}>
            <Stack {...navHorizontalStackStyle}>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('features')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('getStarted')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('howToEarn')}</Button>
              <Select {...navSelectStyle} {...typoStyle.sublabel.navselect} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
                <option value="en">English</option>
                <option value="zh">Chinese</option>
              </Select>
            </Stack>
          </Box>
       </Stack>
    </Container>
  </Box>
)