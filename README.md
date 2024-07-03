# Команда №4 | Frontend

## Состав команды фронтенда

- [Владимир Фролов](https://github.com/v37f) Главный по направлению
- [Олеся Варнакова](https://github.com/Olesya090585)

## Ссылка на приложение

https://artfour.vercel.app/

## Сборка и запуск

Клонируйте репозиторий и перейдите в его директорию

```sh
git clone https://github.com/Sagaart-4/saga-frontend.git && cd saga-frontend
```

Для установки зависимостей, выполните команду:

```sh
npm ci
```

Для сборки проекта введите команду:

```sh
npm run build
```

Для запуска проекта в прод-режиме произведите сборку проекта и выполните команды:

```sh
npm run start
```

Можно скомбинировать команды для быстрого запуска:

```sh
npm ci && npm run build && npm run start
```

Приложение будет доступно по адресу: http://localhost:4173

Для запуска проекта в dev-режиме введите команду:

```sh
npm run dev
```

Приложение будет доступно по адресу: http://localhost:5173

## Стэк

- HTML/SCSS
- JavaScript
- TypeSctipt
- ReactJS
- Redux Toolkit
- Vite
- react-router-dom
- [react-hook-form](https://react-hook-form.com/)
- [yup](https://www.npmjs.com/package/yup)
- [react-slick](https://react-slick.neostack.com/)

## SCSS

Все основные SCSS константы лежат по пути src/styles/variables.scss.

и являются цветовой палитрой приложения. Все цвета взяты из [макета](https://www.figma.com/design/XEw55EmzRGmpLw7jkCxP0i/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-%E2%84%964%2C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%A1%D0%B0%D0%B3%D0%B0%D0%B0%D1%80%D1%82?node-id=0-1&t=9jNFwRioVu1SQZKI-0) Figma UI kit.
Все основные миксины лежат по пути src/styles/mixins.scss.

начинающиеся с text - различные шрифты на основе Figma UI kit
начинающиеся с reset - обнуление стандартных стилей

## Иконки и шрифты

В проекте применялись иконки из [макета](https://www.figma.com/design/XEw55EmzRGmpLw7jkCxP0i/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B0-%E2%84%964%2C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%A1%D0%B0%D0%B3%D0%B0%D0%B0%D1%80%D1%82?node-id=0-1&t=9jNFwRioVu1SQZKI-0) и шрифт [Manrope](https://fonts.google.com/specimen/Manrope)

## Информация о проекте

Проект сверстан для просмотра в десктопных браузерах и экранах с разрешением 1440px и более.
