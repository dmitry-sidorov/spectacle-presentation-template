import React from 'react'
import { FlexBox, Notes } from 'spectacle'
import { COLOR } from "../constants";
import List from './List.jsx'

const DEFAULT_NOTES_FONT_SIZE = 21

const NotesList = ({ slideNumber, slidesNumber, isOrdered, hasBullets, isAnimated, items = [], fontSize = DEFAULT_NOTES_FONT_SIZE }) => {
  /*
  const symbolsQuantity = items.reduce((acc, item) => acc + item.length, 0)

  if (symbolsQuantity > 800) fontSize = fontSize * 0.8
  */

  const listProps = { fontColor: COLOR.light, items, fontSize, isOrdered, hasBullets, isAnimated }

  return (
    <Notes>
      <FlexBox justifyContent={'center'}>
         <span style={{ fontSize }}>{`${slideNumber} / ${slidesNumber}`}</span>
      </FlexBox>
      <List {...listProps} />
    </Notes>
  )
}

export default NotesList
