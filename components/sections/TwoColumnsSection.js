import { Box, Container, VStack, Stack, Heading, Text, Spacer, Slider, SliderTrack, SliderFilledTrack, SliderThumb, HStack } from "@chakra-ui/react";
import { blackBox, horizontalItemsStackStyle, sliderStyle, sliderThumbStyle, sliderTrackStyle, twoColumnsContainerStyle, twoColumnsStackStyle, twoColumnsVerticalStackStyle, typoStyle, verticalItemsStackStyle } from "../../styles/globalStyle";

export const TwoColumnsSection = ({ }) => (
  <Box>
    <Container {...twoColumnsContainerStyle}>
      <Stack {...twoColumnsStackStyle}>
        <VStack {...twoColumnsVerticalStackStyle}>
          <Heading {...typoStyle.headline.twoColumnsHeadline}>Income Calculator</Heading>
          <li {...typoStyle.text.listItemText}>Get started for free</li>
          <li {...typoStyle.text.listItemText}>No hidden costs</li>
          <li {...typoStyle.text.listItemText}>$1 mint fee only</li>
          <li {...typoStyle.text.listItemText}>Owner configured transaction fees starting at 2%</li>
          <li {...typoStyle.text.listItemText}>Not taking royalty fees</li>
        </VStack> 
        <Spacer />
        <Box {...blackBox}>
          <Text {...typoStyle.text.twoColumnsText}>Income Calculator</Text>
          <Text {...typoStyle.subtext.twoColumnsSubText}>Example using 1,000,000 NFT items minted, paid with USDC</Text>
          <Text {...typoStyle.text.twoColumnsText} pb={4}>What's your marketplace mint fee?</Text>
          <Slider defaultValue={5}>
            <SliderTrack {...sliderTrackStyle}>
              <SliderFilledTrack {...sliderStyle} />
            </SliderTrack>
            <SliderThumb {...sliderThumbStyle} />
          </Slider>
          <HStack mb={8}>
            <Text {...typoStyle.text.twoColumnsSmallText}>$1</Text>
            <Spacer />
            <Text {...typoStyle.text.twoColumnsSmallText}>$100</Text>
          </HStack>
          <Stack {...horizontalItemsStackStyle}>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>Marketplace Owner</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>450,000 USDC</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>Data Provider</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>100,000 USDC</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>Ambassador</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>250,000 USDC</Text>
            </VStack>
            <VStack {...verticalItemsStackStyle}>
              <Text {...typoStyle.text.twoColumnsSmallerText}>Xircus</Text>
              <Text {...typoStyle.text.twoColumnsSmallOrangeText}>250,000 USDC</Text>
            </VStack>
          </Stack>
        </Box> 
      </Stack>
    </Container>
  </Box>
)