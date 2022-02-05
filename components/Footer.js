import { Box, Stack, Text, Button, Container, Spacer, HStack } from "@chakra-ui/react";
import { footerButton, footerContainerStyle, footerStackStyle, iconsStyle, typoStyle } from "../styles/globalStyle";
import { FaTelegramPlane, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer  = ({ translation }) => (
  <Box>
    <Container {...footerContainerStyle}>
      <Stack {...footerStackStyle}>
        <Text {...typoStyle.text.smallText}>{translation('allRights')}</Text>
        <Spacer />
        <HStack>
          <FaTelegramPlane {...iconsStyle} />
          <FaFacebook {...iconsStyle} />
          <FaTwitter {...iconsStyle} />
          <FaYoutube {...iconsStyle} />
          <FaGithub {...iconsStyle} />
          <FaInstagram {...iconsStyle} />
          <FaLinkedin {...iconsStyle} />
        </HStack>
        <Spacer />
        <HStack>
          <Button {...footerButton} {...typoStyle.text.smallText}>{translation('blog')}</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>{translation('resources')}</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>{translation('terms')}</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>{translation('privacy')}</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>{translation('contactUs')}</Button>
        </HStack>
      </Stack>
    </Container>
  </Box>
)