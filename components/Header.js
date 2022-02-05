import { Box, Container, Img, Stack, Heading, Spacer, Button, Select, IconButton } from "@chakra-ui/react";
import { horizontalStackStyle, navIconStyle, navHeadingStyle, navButtonStyle, navSelectStyle, navBoxStyle, fixedBoxStyle, containerStyle, typoStyle } from "../styles/globalStyle";
import Router from 'next/router'

export const Header = ({ icon, translation }) => (
  <Box {...fixedBoxStyle}>
    <Container {...containerStyle}>
       <Stack {...horizontalStackStyle}>
          <Img src={icon} {...navIconStyle} />
          <Heading {...typoStyle.title.navTitle}>{translation('name')}</Heading>
          <Spacer />
          <Box {...navBoxStyle}>
            <Stack {...horizontalStackStyle}>
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