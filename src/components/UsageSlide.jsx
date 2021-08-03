import React from 'react'
import { COLOR, FONT_SIZE } from '../constants'
import { CodePane, CodeSpan, FlexBox } from 'spectacle'

// TODO: remove
const UsageSlide = () => {
  const color = COLOR.dark
  const fontSize = FONT_SIZE.S
  const margin = 20
  const language = 'bash'

  return (
    <FlexBox flexDirection={'column'} alignItems={'flex-start'}>
      <CodeSpan margin={margin} color={color} fontSize={fontSize}>Required software: Node.js v.12+</CodeSpan>
      <CodeSpan margin={margin} color={color} fontSize={fontSize}>Clone the repo to your PC:</CodeSpan>
      <CodePane language={language} fontSize={fontSize}>git clone ssh://git@stash.wargaming.net:2222/~d_sidorov/tools_plugin_cli.git</CodePane>
      <CodeSpan margin={margin} color={color} fontSize={fontSize}>Install dependencies:</CodeSpan>
      <CodePane language={language} fontSize={fontSize}>npm install</CodePane>
      <CodeSpan margin={margin} color={color} fontSize={fontSize}>Run CLI script with command:</CodeSpan>
      <CodePane language={language} fontSize={fontSize}>npm run create</CodePane>
    </FlexBox>
  )
}

export default UsageSlide
