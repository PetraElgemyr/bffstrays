# Bff Strays

I decided to re-make the existing site [Bff Strays](https://bffstrays.se/) as my degree project at Medieinstitutet. Bff Strays is a non-profit organization that focuses on giving stray dogs from Spain new homes in Sweden.

## Tech stack

This project is made with Vite and I use React and typescript. The styling is mainly styled components and some scss. For code structuring I use ESLint. I also use some components and icons from libraries such as Material UI, CoreUI, Bootstrap, and a font from Adobe.

[![Typescript](https://img.shields.io/badge/tech-typescript-blue)](https://www.typescriptlang.org/docs/)
[![scss](https://img.shields.io/badge/tech-scss-pink)](https://sass-lang.com/guide)
[![React](https://img.shields.io/badge/tech-react-orange)](https://react.dev/)
[![Styled components :nail_care:](https://img.shields.io/badge/tech-pink)](https://styled-components.com/)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installation

- Clone the repository with `git clone`
- Install all the dependencies by running `npm install`in the root of the project.
- Before running the project, create a file named .env in the root of the project. To access the real data you need two keys in the .env file. One VITE_REACT_APP_SPACE_ID and one called VITE_REACT_APP_ACCESS_TOKEN. These are given from the Contentful cms. If your Contentful account has been invited to the Contentful project, you have access to the real data.
- Run `npm run dev` to start the project to develop it. For preview, run `npm run preview`.

## Medias

All the media are taken from Pexels, Pixabay and Bff Strays and the rights and credit for these photos goes to the rightful owners, platforms and photographers.
