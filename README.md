## Devinder website built with React.

_Note: Packages used in this project are installed with npm and using npm or other package managers might lead to a conflict between lock files._

## Project Structure
```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── ui/ 
|   |   |   ├── button.tsx
|   |   |   ├── input.tsx
│   │   |   └── table.tsx
|   |   ├── Header.tsx
|   |   ├── Section.tsx
│   │   └── UserTable.tsx
│   ├── hooks/
│   |   └── useFetchUser.ts
|   ├── lib/
│   |   └── utils.tsx
|   ├── utils/
│   |   └── formatThousands.ts
|   ├── App.tsx
|   ├── main.tsx
│   └── styles.css
└── node_moduels
```
## Installation
All the commands below are run from the root of the project, from a terminal:
|Command|Action|
|:-|:-|
|npm install|Installs dependencies|
|npm run dev| Starts local dev server at localhost:3000| 
|npm run build | Build your production site to ./dist/
|npm run preview | Preview your build locally, before deploying|
