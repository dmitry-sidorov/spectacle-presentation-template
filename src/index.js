import React from 'react'
import ReactDOM from 'react-dom'
import { Deck } from 'spectacle'
import { THEME } from './constants'
import Slides from './components/Slides.jsx'
import PresentationTemplate from './components/PresentationTemplate.jsx'

const Presentation = () => (
  <Deck theme={THEME} template={PresentationTemplate} transition={['slide']}>
    <Slides />
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
