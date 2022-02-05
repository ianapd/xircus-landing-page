import { Box, Container, Heading, HStack, Text, VStack, Img, Stack } from "@chakra-ui/react"
import { horizontalStackCardStyle, innerVerticalStackCardStyle, outerVerticalStackCardStyle, stackCardStyle, stackContainerStyle, stackImageStyle, stackImagestyle, typoStyle } from "../../styles/globalStyle"

export const StackSection = ({ blockChains=[], otherBlockChains=[], translation }) => (
  <Box>
    <Container {...stackContainerStyle} centerContent>
      <Heading {...typoStyle.headline.sectionHeadline}>{translation('headline')}</Heading>
      <Text {...typoStyle.text.stackText}>{translation('subHeadline')}</Text>
      <VStack {...outerVerticalStackCardStyle}>
        <Stack {...horizontalStackCardStyle}>
          {blockChains.map((item, itemkey) => (
            <VStack {...innerVerticalStackCardStyle}>
              <Img src={item.img} {...stackImageStyle} />
              <Text {...typoStyle.label.blockChain}>{item.title}</Text>
              {
                item.label !== "" ? (
                  <Text {...typoStyle.label.tag}>{item.label}</Text>
                ) : (<></>)
              }
            </VStack>
          ))}
        </Stack>
        <Stack {...horizontalStackCardStyle}>
          {otherBlockChains.map((item, itemkey) => (
            <VStack {...innerVerticalStackCardStyle}>
              <Img src={item.img} {...stackImageStyle} />
              <Text {...typoStyle.label.blockChain}>{item.title}</Text>
              {
                item.label !== "" ? (
                  <Text {...typoStyle.label.tag}>{item.label}</Text>
                ) : (<></>)
              }
            </VStack>
          ))}
        </Stack>
      </VStack>
    </Container>
  </Box>
)