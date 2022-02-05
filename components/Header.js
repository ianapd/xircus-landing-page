import { Box, Container, Img, Stack, Heading, Spacer, Button, Select, IconButton } from "@chakra-ui/react";
import { horizontalStackStyle, navIconStyle, navHeadingStyle, navButtonStyle, navSelectStyle, navBoxStyle, fixedBoxStyle, containerStyle, typoStyle } from "../styles/globalStyle";

export const Header = ({ icon }) => (
  <Box {...fixedBoxStyle}>
    <Container {...containerStyle}>
       <Stack {...horizontalStackStyle}>
          <Img src={icon} {...navIconStyle} />
          <Heading {...typoStyle.title.navTitle}>Xircus</Heading>
          <Spacer />
          <Box {...navBoxStyle}>
            <Stack {...horizontalStackStyle}>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>Features</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>Get Started</Button>
              <Button {...navButtonStyle} {...typoStyle.sublabel.navbutton}>How To Earn</Button>
              <Select {...navSelectStyle} {...typoStyle.sublabel.navselect}>
                <option value="en">English</option>
                <option value="fi">Filipino</option>
              </Select>
            </Stack>
          </Box>
       </Stack>
    </Container>
  </Box>
)