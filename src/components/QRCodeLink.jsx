import React from 'react'
import { FlexBox, Image, Text } from 'spectacle'
import { DEFAULT_FONT_SIZE } from '../constants'

const QRCodeLink = ({ text, ...imageProps }) => (
  <FlexBox justifyContent={'flex-start'} flexDirection={'row'}>
    <span style={{ marginRight: 20, fontSize: DEFAULT_FONT_SIZE }}>{text}</span>
    <Image {...imageProps} />
  </FlexBox>
)

export default QRCodeLink
