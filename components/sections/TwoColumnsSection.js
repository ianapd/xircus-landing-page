import { Box, Container, VStack, Stack, Heading, Text, Spacer, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack } from "@chakra-ui/react";
import { blackBox, horizontalItemsStackStyle, sliderStyle, sliderThumbStyle, sliderTrackStyle, twoColumnsContainerStyle, twoColumnsStackStyle, twoColumnsVerticalStackStyle, typoStyle, verticalItemsStackStyle } from "../../styles/globalStyle";

export const TwoColumnsSection = ({ translation }) => (
  <Box>
    <Container {...twoColumnsContainerStyle}>
      <Stack {...twoColumnsStackStyle}>
        <VStack {...twoColumnsVerticalStackStyle}>
          <Heading {...typoStyle.headline.twoColumnsHeadline}>{translation('headline')}</Heading>
          <li {...typoStyle.text.listItemText}>{translation('forFree')}</li>
          <li {...typoStyle.text.listItemText}>{translation('costs')}</li>
          <li {...typoStyle.text.listItemText}>{translation('mintFee')}</li>
          <li {...typoStyle.text.listItemText}>{translation('owner')}</li>
          <li {...typoStyle.text.listItemText}>{translation('royaltyFees')}</li>
        </VStack> 
        <Spacer />
        <Box {...blackBox}>
          <Text {...typoStyle.text.twoColumnsText}>{translation('headline')}</Text>
          <Text {...typoStyle.subtext.twoColumnsSubText}>{translation('itemsMinted')}</Text>
          <Text {...typoStyle.text.twoColumnsText} pb={4}>{translation('marketPlace')}</Text>
          <Slider defaultValue={5}>
            <SliderTrack {...sliderTrackStyle}>
              <SliderFilledTrack {...sliderStyle} />
            </SliderTrack>
            <SliderThumb {...sliderThumbStyle} />
          </Slider>
          <HStack mb={8}>
            <Text {...typoStyle.text.twoColumnsSmallText}>{translation('lowest')}</Text>
            <Spacer />
            <Text {...typoStyle.text.twoColumnsSmallText}>{translation('highest')}</Text>
          </HStack>
          <Stack {...horizontalItemsStackStyle}>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>{translation('marketplaceText')}</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>{translation('marketplacePrice')}</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>{translation('dataText')}</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>{translation('dataPrice')}</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>{translation('ambassadorText')}</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>{translation('ambassadorPrice')}</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>{translation('xircus')}</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>{translation('xircusPrice')}</Text>
            </VStack>
          </Stack>
        </Box> 
      </Stack>
    </Container>
  </Box>
)