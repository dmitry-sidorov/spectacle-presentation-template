import React, { isValidElement } from 'react'
import { DEFAULT_FONT_SIZE } from '../constants'
import { Appear, ListItem, OrderedList, UnorderedList } from 'spectacle'

const List = ({
  fontColor,
  isOrdered = false,
  fontSize = DEFAULT_FONT_SIZE,
  items = [],
  hasBullets = true,
  isAnimated = false
}) => {
  const AnimationWrapper = ({ children }) =>
    isAnimated ? <Appear>{children}</Appear> : children

  const content = items.map((item, key) => {
    const itemStyle = hasBullets || !isValidElement(item) ? {} : { listStyleType: 'none' }

    return (
      <AnimationWrapper key={key}>
        <ListItem style={itemStyle}>{item}</ListItem>
      </AnimationWrapper>
    )
  })

  const ListComponent = (props) =>
    isOrdered ? <OrderedList {...props} /> : <UnorderedList {...props} />

  return <ListComponent color={fontColor} fontSize={fontSize}>{content}</ListComponent>
}

export default List
