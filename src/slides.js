import React from 'react'
import { Appear, CodeSpan, CodePane, FlexBox, Grid, Heading, Image } from 'spectacle'
import { DEFAULT_FONT_SIZE, FONT_SIZE } from './constants'
import PlatformImage from './components/PlatformImage.jsx'
import ImageCentered from './components/ImageCentered.jsx'
import QRCodesList from './components/QRCodesList.jsx'

const slides = [
  {
    id: 1,
    component:
      <FlexBox height="100%" flexDirection="column">
        <PlatformImage />
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>Platform Tools presents...</Heading>
      </FlexBox>,
    notes: {
      items: [
        `
          Вступление. пам-пам!
          `
      ]
    }
  },
  {
    id: 2,
    component:
      <>
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>Создание админки купонов</Heading>
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>для Коммерса</Heading>
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>при помощи Тулового фреймворка</Heading>
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>с блэкджеком ♡ ♤ ♧ ♢</Heading>
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>...и тайпскриптом</Heading>
      </>,
    notes: {
      items: []
    }
  },
  {
    id: 3,
    header: {
      text: 'План доклада'
    },
    list: {
      items: [],
      isOrdered: true
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 4,
    header: { text: 'Мотивация' },
    list: {
      items: [
        'Коммерсу необходима новая админка для управления сущностями купонов',
        'Разбить существующий монолит PSUI на сервисы для облегчение поддержки',
        "Перейти от realm'ов к union",
        'Перейти к более современному технологическому стеку'
      ]
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 5,
    header: { text: 'Создание купона ➡️' },
    component: <ImageCentered src={'./src/assets/big-picture/create-coupon.png'} width={'85%'} />,
    notes: {
      items: [
        `
        `
      ]
    }
  }
]

export default slides
