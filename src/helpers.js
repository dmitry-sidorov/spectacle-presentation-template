import { COLOR, THEME_COLOR_PARAMS } from './constants'

const negateColor = (color) => {
  const [negativeColor] = Object.values(COLOR).filter(key => key !== color)

  return negativeColor
}

export const getSlideThemeColors = slideNumber => {
  const { defaultColor, negativeColorSlides } = THEME_COLOR_PARAMS
  const isNegative = negativeColorSlides.includes(slideNumber)

  return {
    backgroundColor: isNegative ? negateColor(defaultColor) : defaultColor,
    fontColor: isNegative ? defaultColor : negateColor(defaultColor)
  }
}
