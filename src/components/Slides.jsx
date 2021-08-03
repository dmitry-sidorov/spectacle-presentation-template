import React from 'react'
import SlideComponent from './SlideComponent.jsx'
import slides from '../slides'

const Slides = () => (
  slides.map(({ list, notes, header, component = <></> }, i, arr) => (
    <SlideComponent list={list} notes={notes} header={header} slideNumber={i + 1} slidesNumber={arr.length} key={i + 1}>
      {component}
    </SlideComponent>)
))

export default Slides
