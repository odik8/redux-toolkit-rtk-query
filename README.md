# redux

Учебный проект по видеоуроку: https://youtu.be/Od5H_CiU2vM?si=qrJEfg5xpt4i_as5

Стек: React 19, TypeScript, Vite, Redux Toolkit, RTK Query, axios, json-server, Pico CSS.

## Запуск

```shell
npm install
npm run server   # json-server на http://localhost:3000, данные в db.json5
npm run dev      # Vite на http://localhost:5173
```

Нужны оба процесса: раздел «Посты» обращается к `http://localhost:3000`.

Остальные скрипты: `npm run build`, `npm run lint`.

## Структура

- `src/store/store.ts` — `setupStore`, `combineReducers`, подключение middleware RTK Query.
- `src/hooks/redux.ts` — типизированные `useAppDispatch` и `useAppSelector`.
- `src/store/reducers/` — слайс пользователей и `createAsyncThunk` (данные с jsonplaceholder).
- `src/services/PostService.ts` — `createApi`: запрос постов с пагинацией, мутации create/update/delete, инвалидация кэша по тегу `Post`.
- `src/components/` — `UserList`/`UserItem` для первой части урока, `PostContainer`/`PostItem` для второй.
- `src/components/PostContainer2.tsx` — второй потребитель того же запроса, в `src/App.tsx` закомментирован.
