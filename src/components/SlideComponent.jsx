import React from 'react'
import { Heading } from 'spectacle'
import { getSlideThemeColors } from '../helpers'
import { FONT_SIZE } from '../constants'
import List from './List.jsx'
import NotesList from './NotesList.jsx'
import SlideWrapper from './SlideWrapper.jsx'


const SlideComponent = ({ slideNumber, slidesNumber, list, children, header, notes = {} }) => {
  const { backgroundColor, fontColor } = getSlideThemeColors(slideNumber)
  const headerContent =
    header
    ? <Heading color={header.color || fontColor} fontSize={header.fontSize || FONT_SIZE.L}>{header.text}</Heading>
    : <></>

  return (
    <SlideWrapper fontColor={fontColor} background={{ color: backgroundColor }}>
      {headerContent}
      {children}
      <List {...list} />
      <NotesList {...notes} slideNumber={slideNumber} slidesNumber={slidesNumber} />
    </SlideWrapper>
  )
}

export default SlideComponent
