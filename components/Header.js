import { Box, Container, Img, Stack, Heading, Spacer, Button, Select, IconButton, VStack, useDisclosure, HStack, DrawerCloseButton, Flex } from "@chakra-ui/react";
import { horizontalStackStyle, navIconStyle, navButtonStyle, navSelectStyle, navBoxStyle, containerStyle, typoStyle, navHorizontalStackStyle, menuIconButtonStyle, drawerStackStyle, drawerCloseStackStyle, drawerIconsStyle, drawerMenuIconStyle, drawerCloseButtonStyle } from "../styles/globalStyle";
import Router from 'next/router'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MobileDrawer } from "./MobileDrawer";

export const Header = ({ icon, translation, isOpen, onOpen, onClose }) => (
  <Box>
    <Container {...containerStyle}>
       <Flex>
          <Img src={icon} {...navIconStyle} />
          <Heading {...typoStyle.title.navTitle}>{translation('name')}</Heading>
          <Spacer />
          <IconButton {...menuIconButtonStyle} onClick={onOpen}>
            <GiHamburgerMenu {...drawerMenuIconStyle} />
          </IconButton>
          <MobileDrawer isOpen={isOpen} onClose={onClose}>
            <VStack {...drawerStackStyle}>
              <HStack {...drawerCloseStackStyle}>
                <Img src={icon} {...navIconStyle} />
                <Heading {...typoStyle.title.navTitle}>{translation('name')}</Heading>
                <Spacer />
                <DrawerCloseButton pt={12} />
              </HStack>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('features')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('getStarted')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('howToEarn')}</Button>
              <Select {...navSelectStyle} {...typoStyle.sublabel.navselect} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
                <option value="en">English</option>
                <option value="zh">Chinese</option>
              </Select>
            </VStack>
          </MobileDrawer>
          <Box {...navBoxStyle}>
            <Stack {...navHorizontalStackStyle}>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('features')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('getStarted')}</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>{translation('howToEarn')}</Button>
              <Spacer />
              <Select {...navSelectStyle} {...typoStyle.sublabel.navselect} onChange={e => Router.push('/', '/', { locale: e.target.value })}>
                <option value="en">English</option>
                <option value="zh">Chinese</option>
              </Select>
            </Stack>
          </Box>
       </Flex>
    </Container>
  </Box>
)