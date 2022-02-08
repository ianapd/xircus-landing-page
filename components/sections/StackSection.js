import { Box, Container, Heading, HStack, Text, VStack, Img, Stack, Wrap, WrapItem, Spacer, Badge, Code } from "@chakra-ui/react"
import { SP } from "next/dist/shared/lib/utils"
import { horizontalStackCardStyle, innerVerticalStackCardStyle, outerVerticalStackCardStyle, stackCardStyle, stackContainerStyle, stackImageStyle, stackImagestyle, typoStyle, wrapStyle } from "../../styles/globalStyle"

export const StackSection = ({ blockChains=[], otherBlockChains=[], translation, cardsTranslation }) => (
  <Box>
    <Container {...stackContainerStyle} centerContent>
      <Heading {...typoStyle.headline.sectionHeadline}>{translation('headline')}</Heading>
      <Text {...typoStyle.text.stackText}>{translation('subHeadline')}</Text>
      <VStack {...outerVerticalStackCardStyle}>
        <Wrap {...wrapStyle}>
          {blockChains.map((item, itemkey) => (
              <WrapItem>
                <VStack {...innerVerticalStackCardStyle}>
                  <Img src={item.img} {...stackImageStyle} />
                  <Text {...typoStyle.label.blockChain}>{item.title}</Text>
                  {
                    item.label !== "" ? (
                      <Badge {...typoStyle.label.tag}>{cardsTranslation(item.label)}</Badge>
                    ) : (<></>)
                  }
                </VStack>
              </WrapItem>
            ))}
        </Wrap>
        <Wrap {...wrapStyle}>
          {otherBlockChains.map((item, itemkey) => (
            <WrapItem>
              <VStack {...innerVerticalStackCardStyle}>
                <Img src={item.img} {...stackImageStyle} />
                <Text {...typoStyle.label.blockChain}>{item.title}</Text>
                {
                  item.label !== "" ? (
                    <Badge {...typoStyle.label.tag}>{cardsTranslation(item.label)}</Badge>
                  ) : (<></>)
                }
              </VStack>
            </WrapItem>  
          ))}
        </Wrap>
      </VStack>
    </Container>
  </Box>
)