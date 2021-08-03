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
      items: [
        'Мотивация',
        'Существующее решение в Платформе',
        'Стек для фронтенда',
        'Создание админки купонов',
        'Шаблон для будущих админок',
        'Итоги'
      ],
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
  },
  {
    id: 6,
    header: { text: 'Публикация купона в составе каталога ➡️' },
    component: <ImageCentered src={'./src/assets/big-picture/create-catalog.png'} width={'85%'} />,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 7,
    header: { text: 'Купон у пользователя ➡️' },
    component: <ImageCentered src={'./src/assets/big-picture/shop-coupon-list.png'} width={'85%'} />,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 8,
    header: { text: 'Покупка с использованием купона 💸' },
    component: <ImageCentered src={'./src/assets/big-picture/shop-purchase-overlay.png'} width={'85%'} />,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 9,
    header: { text: 'Tools Universe спешит на помощь👍' },
    list: {
      items: [
        <ImageCentered src="./src/assets/thumb-up.jpg"/>
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 10,
    header: { text: 'Преимущества тулов' },
    list: {
      items: [
        'Переход от realm к union архитектуре',
        'Микросервисы',
        'Современный стек технологий',
        'Наличие библиотеки готовых компонентов toolsui',
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
    id: 7,
    header: { text: 'Архитектура тулового фреймворка' },
    list: {
      items: [
        <Image src="./src/assets/tools-arch.png" width={'90%'}/>
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 8,
    header: { text: 'Строим свою админку с блекджеком и купонами' },
    list: {
      items: [
        <ImageCentered src="../src/assets/blackjack.jpg" width={'70%'} />
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 9,
    header: { text: 'Технологический стек' },
    list: {
      items: [
        'React, React Router library',
        'Typescript',
        'Cypress',
        'Eslint, Prettier, Husky',
        '̶R̶e̶d̶u̶x̶,̶ ̶M̶o̶b̶X̶'
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
    id: 10,
    header: { text: 'React' },
    list: {
      items: [
        'Компонентный подход',
        'Язык JSX (Javascript XML)',
        'Виртуальный DOM',
        'Однонаправленная привязка данных и иммутабельное состояние компонентов. (привет, ФП)'
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
    id: 11,
    header: { text: 'Компонентный подход' },
    list: {
      items: [
        <ImageCentered src="./src/assets/react-component-2.png" width={'100%'} />
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 12,
    header: { text: 'JSX' },
    list: {
      items: [
        <CodePane language="jsx">{
          `
          const Button = () => {
            const buttonStyles = {
              border: '1px'
            }

            const clickHandler = event => {
              // do something
            }

            return <button className={buttonStyles} onClick={clickHandler}>Click Me</button>
          }
        `
        }</CodePane>
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 13,
    header: { text: 'Виртуальный DOM 🏠' },
    list: {
      items: [
        <ImageCentered src="./src/assets/virtual-dom.jpeg" width="600" />
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 14,
    header: { text: 'Однонаправленный биндинг' },
    list: {
      items: [
        <ImageCentered src="./src/assets/one-way-binding.png" width={'100%'} />
      ],
      hasBullets: false
    },
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 15,
    header: { text: 'Typescript' },
    list: {
      items: [
        'Статические типы данных',
        'Синтаксический сахар 🍧',
        'Статический анализ кода',
        'Gradual typing',
        'Модификаторы доступа',
        'Интерфейсы'
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
    id: 16,
    header: { text: 'Фичи Cypress' },
    list: {
      items: [
        'Обширная документация',
        'Возможность написания тестов с эммуляцией действий пользователя и end-to-end тестов',
        'Удобный браузер для дебага',
        'Интеграция с React',
        'Возможность запуска в CI/CD для приложения'
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
    id: 17,
    header: { text: 'Преимущества Cypress vs Selenium' },
    list: {
      items: [
        'Быстрая и удобная настройка',
        'Cypress работает с программой напрямую',
        'Удобный браузер для дебага',
        'Тесты на JS - меньший порог входа'
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
    id: 18,
    component:
      <Appear>
        <ImageCentered src="./src/assets/cypress-browser.gif" width={'100%'} />
      </Appear>,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 19,
    header: { text: 'Тесты пишутся на JS'},
    component:
      <CodePane language="js" >{
        `
          describe('Code field', () => {
            beforeEach(() => fillCouponPageFields(COUPON_FIELDS.FRIENDLY_NAME, COUPON_FIELDS.METADATA))

            it('should be required', () => {
              clickCreateButton()
              cy.react('TextFieldBase', { props: { errorMessage: code.required } }).should('be.visible')
            })

            it('should be filled with allowed symbols', () => {
              cy.get('[data-cy="code"]').type('123/?&345#')
              clickCreateButton()
              cy.react('TextFieldBase', { props: { errorMessage: code.pattern } }).should('be.visible')
            })
          })
        `
      }</CodePane>,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 20,
    header: { text: 'Нюансы Cypress' },
    list: {
      items: [
        'Более молодой проект',
        'Время выполнения написанных тестов',
        'БОльшие ресурсы по сравнению с юнит-тестами',
        'Нет поддержки мобильного тестирования'
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
    id: 19,
    header: { text: 'Фичи админки купонов' },
    list: {
      items: [
        'CRUD (Create, Read, Update, Delete) для сущностей купонов',
        'Создание и публикация каталогов купонов в CATS',
        'Просмотр деталей созданных купонов и каталогов',
        'Возможность изменять статус купонов (draft, verified, production, archive)',
        'Фильтрация и поиск купонов по различным параметрам'
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
    id: 15,
    component:
      <Appear>
        <ImageCentered src="./src/assets/admin/create-coupon.gif" width={'100%'} />
      </Appear>,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 16,
    component:
      <Appear>
        <ImageCentered src="./src/assets/admin/coupon-list.gif" width={'100%'} />
      </Appear>,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 17,
    component:
      <Appear>
        <ImageCentered src="./src/assets/admin/catalogs.gif" width={'100%'} />
      </Appear>,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 18,
    header: { text: 'Выглядит здорово, но есть пару небольших нюансов...' },
    component:
          <ImageCentered src="../src/assets/skeptical-cat.jpg" width={400} margin={'auto'} />,
    notes: {
      items: [
      ]
    }
  },
  {
    id: 19,
    header: { text: 'Встреченные челленджи' },
    list: {
      items: [
        'Руководство по разработке тулов устарело',
        'Инструмент для локальной развертки тулов работают некорректно'
      ],
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
    id: 20,
    header: { text: 'Технологический стек CLI бойлерплейта' },
    list: {
      items: [
        'Платформа NodeJS (V8 + LibUV)',
        'Библиотека yargs-interactive'
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
    id: 21,
    header: { text: 'Фичи CLI бойлерплейта' },
    list: {
      items: [
        'Структура проекта',
        'bash-скрипт для регистрации нового плагина в WGPTU',
        'Интеграция с библиотекой компонентов ToolsUI',
        'Клиент для похода в БЕ-плагин через Proxy Tools',
        'Контекст Оверлорда',
        'Typescript',
        'Cypress для тестов',
        'Линтеры'
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
    id: 19,
    header: { text: 'Итого' },
    list: {
      items: [
        'Новая админка купонов с унифицированным UI',
        'Движение в сторону закапывания PSUI, отделение фронтенда от бекенда',
        "Свежие технологии, полезный опыт с React'ом",
        'Опыт работы с платформенными тулами'
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
    id: 20,
    header: { text: 'Ссылки' },
    component: <QRCodesList items={
      [
        { text: 'WGPTU architecture', src: './src/assets/links/tools-arch-qrcode.png' },
        { text: 'ToolsUI repository' , src: './src/assets/links/toolsui-qrcode.png' },
        { text: 'React homepage', src: './src/assets/links/reactjs-qrcode.png' },
        { text: 'Typescript homepage', src: './src/assets/links/typescript-qrcode.png' },
        { text: 'Cypress homepage', src: './src/assets/links/cypress-qrcode.png' },
        { text: 'Alcoupone на wgt1 (admin/111111)', src: './src/assets/links/alcoupone-wgt1-qrcode.png' },
        { text: 'CLI app repository', src: './src/assets/links/cli-plugin-qrcode.png' }
      ]
    } />,
    notes: {
      items: [
        `
        `
      ]
    }
  },
  {
    id: 20,
    component:
      <FlexBox height="100%" flexDirection="column">
        <PlatformImage />
        <Heading color={'primary'} fontSize={FONT_SIZE.L}>Спасибо за внимание!</Heading>
      </FlexBox>,
    notes: {
      items: [
        'bye-bye'
      ]
    }
  },
]

export default slides
