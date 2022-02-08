import { Box, Container, Stack, Img, Heading, Text, Button, IconButton , Grid, Spacer, Circle} from "@chakra-ui/react";
import { columnStackStyle, containerStyle, gradientButtonStyle, iconStyle, imgLogoStyle, mainButtonStyle, playIconStyle, rowStackStyle, typoStyle, verticalStackStyle } from "../../styles/globalStyle";
import { BsFillPlayFill } from 'react-icons/bs'

export const MainSection = ({ icon, images=[], translation }) => (
  <Box>
    <Container {...containerStyle}>
      <Stack {...verticalStackStyle}>
        <Img src={icon} {...iconStyle} />
        <Heading {...typoStyle.headline.mainHeadline}>{translation('name')}</Heading>
        <Heading {...typoStyle.headline.mainSecondHeadline}>{translation('headline')}</Heading>
        <Text {...typoStyle.subheadline.mainSubHeadline}>{translation('subHeadline')}</Text>
          <IconButton {...mainButtonStyle} isRound icon={<BsFillPlayFill {...playIconStyle} />} />
        <Stack {...columnStackStyle}>
          <Button {...gradientButtonStyle} {...typoStyle.text.buttonText}>{translation('deployMarketplace')}</Button>
          <Button {...gradientButtonStyle} {...typoStyle.text.buttonText}>{translation('xircusPunks')}</Button>
        </Stack>
        <Stack {...rowStackStyle}>
          <Text {...typoStyle.title.mainTitle}>{translation('asSeenOn')}</Text>
          {images.map((item, itemKey) => (
            <Img src={item} {...imgLogoStyle} />
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
)