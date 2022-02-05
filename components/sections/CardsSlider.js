import { Box, Img, Container, Heading, IconButton, Stack, VStack, Text } from "@chakra-ui/react";
import { arrowIconStyle, cardsSliderContainerStyle, featureSliderBoxStyle, featureSliderStackStyle, gradientButtonStyle, sliderImageStyle, sliderStackStyle, typoStyle } from "../../styles/globalStyle";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export const CardsSlider = ({ featureCards=[], translation }) => (
  <Box>
    <Container {...cardsSliderContainerStyle}>
      <Heading {...typoStyle.headline.sliderHeadline}>{translation('headline')}</Heading>
      <Stack {...sliderStackStyle}>
        <IconButton 
          {...gradientButtonStyle} p={1} display={{ base: 'none', lg: 'flex' }}>
            <MdKeyboardArrowLeft {...arrowIconStyle} />
          </IconButton>
          {featureCards.map((item, itemKey) => (
            <Box {...featureSliderBoxStyle}>
              <VStack {...featureSliderStackStyle}>
                <Img src={item.img} {...sliderImageStyle} />
                <Text {...typoStyle.title.sliderTitle}>{item.title}</Text>
              </VStack>
            </Box>
          ))}
          <IconButton 
          {...gradientButtonStyle} p={1} display={{ base: 'none', lg: 'flex' }}>
            <MdKeyboardArrowRight {...arrowIconStyle} />
          </IconButton>
      </Stack>
    </Container>
  </Box>
)