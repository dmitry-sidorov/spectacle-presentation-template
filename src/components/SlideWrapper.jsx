import React from 'react'
import { Slide } from 'spectacle'

const SlideWrapper = ({ background, children, fontColor }) => {
  const backgroundProps = { backgroundColor: background.color }

  if (background && background.image) backgroundProps['backgroundImage'] = `url(${background.image})`
  if (background && background.opacity) backgroundProps['backgroundOpacity'] = background.opacity

  return (
    <Slide {...backgroundProps}>
      {	React.Children.map(
				children,
				child =>
					React.cloneElement(child, {
						fontColor
					})
			)}
    </Slide>
  )
}

export default SlideWrapper
