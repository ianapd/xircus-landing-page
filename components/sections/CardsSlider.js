import { Box, Img, Container, Heading, IconButton, Stack, VStack, Text } from "@chakra-ui/react";
import { arrowIconStyle, cardsSliderContainerStyle, featureSliderBoxStyle, featureSliderStackStyle, gradientButtonStyle, sliderImageStyle, sliderStackStyle, typoStyle } from "../../styles/globalStyle";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import Carousel from 'react-elastic-carousel'

export const CardsSlider = ({ featureCards=[], translation, slider, setSlider, breakPoints=[] }) => (
  <Box>
    <Container {...cardsSliderContainerStyle}>
      <Heading {...typoStyle.headline.sliderHeadline}>{translation('headline')}</Heading>
      <Stack {...sliderStackStyle}>
        <IconButton 
          {...gradientButtonStyle}
          p={1}
          display={{base: 'none', lg: 'flex'}}
          onClick={() => slider.slidePrev()}>
            <MdKeyboardArrowLeft {...arrowIconStyle} />
          </IconButton>
          <Carousel breakPoints={breakPoints} showArrows={false} pagination={false} ref={(slider) => setSlider(slider)}>
            {featureCards.map((item, itemKey) => (
              <Box {...featureSliderBoxStyle}>
                <VStack {...featureSliderStackStyle}>
                  <Img src={item.img} {...sliderImageStyle} />
                  <Text {...typoStyle.title.sliderTitle}>{item.title}</Text>
                </VStack>
              </Box>
            ))}
          </Carousel>
          <IconButton 
          {...gradientButtonStyle}
          p={1}
          display={{base: 'none', lg: 'flex'}}
          onClick={() => slider.slideNext()}>
            <MdKeyboardArrowRight {...arrowIconStyle} />
          </IconButton>
      </Stack>
    </Container>
  </Box>
)