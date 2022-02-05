import { Box, Stack, Text, Button, Container, Spacer, HStack } from "@chakra-ui/react";
import { footerButton, footerContainerStyle, footerStackStyle, iconsStyle, typoStyle } from "../styles/globalStyle";
import { FaTelegramPlane, FaFacebook, FaTwitter, FaYoutube, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

export const Footer  = ({ }) => (
  <Box>
    <Container {...footerContainerStyle}>
      <Stack {...footerStackStyle}>
        <Text {...typoStyle.text.smallText}>All Right Reserved 2021 | Xircus Pte. Ltd</Text>
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
          <Button {...footerButton} {...typoStyle.text.smallText}>Blog</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>Resources</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>Terms and Condition</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>Privacy</Button>
          <Button {...footerButton} {...typoStyle.text.smallText}>Contact Us</Button>
        </HStack>
      </Stack>
    </Container>
  </Box>
)