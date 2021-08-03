import React from 'react'
import { Grid, Image } from 'spectacle'
import { DEFAULT_FONT_SIZE } from '../constants'

const MAX_QUANTITY = 8

const QRCodesList = ({ items }) => (
  <Grid
    gridTemplateColumns="1fr 1fr 1fr 1fr"
    gridTemplateRows="1fr 1fr 1fr"
    alignItems="start"
    justifyContent="start"
    gridRowGap={50}
  >
    {items
      .slice(0, MAX_QUANTITY)
      .reduce((acc, { text, src }, i ) => {
        const textItem = <span style={{ margin: 'auto 0 auto 0', fontSize: DEFAULT_FONT_SIZE }} key={'text_' + i}>{text}</span>
        const imageItem = <Image width={100} src={src} key={'qrcode_' + i} />

        return [...acc, textItem, imageItem]
      }, [])
    }
  </Grid>
)

export default QRCodesList
