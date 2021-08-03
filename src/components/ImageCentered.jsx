import React from 'react'
import { FlexBox, Image } from 'spectacle'

const ImageCentered = props => (
  <FlexBox justifyContent={'center'} flexDirection={'column'}>
    <Image {...props} />
  </FlexBox>
)

export default ImageCentered
