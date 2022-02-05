import { Box, Container, Stack, Img, Heading, Text, Button, IconButton , Grid, Spacer} from "@chakra-ui/react";
import { columnStackStyle, containerStyle, gradientButtonStyle, iconStyle, imgLogoStyle, mainButtonStyle, playIconStyle, rowStackStyle, typoStyle, verticalStackStyle } from "../../styles/globalStyle";
import { BsFillPlayFill } from 'react-icons/bs'

export const MainSection = ({ icon, images=[] }) => (
  <Box>
    <Container {...containerStyle}>
      <Stack {...verticalStackStyle}>
        <Img src={icon} {...iconStyle} />
        <Heading {...typoStyle.headline.mainHeadline}>Xircus</Heading>
        <Heading {...typoStyle.headline.mainSecondHeadline}>Start your NFT business today!</Heading>
        <Text {...typoStyle.subheadline.mainSubHeadline}>Deploy your customizable NFT marketplace in minutes <br />bundled with awesome features</Text>
        <IconButton {...mainButtonStyle}>
          <BsFillPlayFill {...playIconStyle} />
        </IconButton>
        <Stack {...columnStackStyle}>
          <Button {...gradientButtonStyle} {...typoStyle.text.buttonText}>Deploy Marketplace</Button>
          <Button {...gradientButtonStyle} {...typoStyle.text.buttonText}>Get XircusPunks for <br/>early access</Button>
        </Stack>
        <Stack {...rowStackStyle}>
          <Text {...typoStyle.title.mainTitle}>As Seen On</Text>
          {images.map((item, itemKey) => (
            <Img src={item} {...imgLogoStyle} />
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
)