import React from 'react'
import { Box, CodeSpan, FlexBox, FullScreen } from 'spectacle'
import { getSlideThemeColors } from "../helpers";
import { FONT_SIZE } from "../constants";

const PresentationTemplate = ({ slideNumber, numberOfSlides }) => {
  const { fontColor } = getSlideThemeColors(slideNumber)

  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen color={fontColor}/>
      </Box>
      <FlexBox alignItems={'flex-end'}>
        <CodeSpan marginRight={30} fontSize={FONT_SIZE.S} color={fontColor}>{`${slideNumber} / ${numberOfSlides}`}</CodeSpan>
      </FlexBox>
    </FlexBox>
  )
}

export default PresentationTemplate
