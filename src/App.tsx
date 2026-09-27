import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux.ts";
import { fetchUsers } from "./store/reducers/ActionCreators.ts";
import UserList from "./components/UserList.tsx";
import PostContainer from "./components/PostContainer.tsx";
// import PostContainer2 from "./components/PostContainer2.tsx";

function App() {
  const dispatch = useAppDispatch()
  const { users, isLoading, error } = useAppSelector(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  return (
    <>
      <header>
        <hgroup>
          <h1>Redux Toolkit + RTK Query</h1>
          <p>Учебный проект по видеоуроку</p>
        </hgroup>
      </header>

      <main className="grid">
        <article>
          <header>
            <strong>Пользователи</strong>
            <br />
            <small>createAsyncThunk · jsonplaceholder</small>
          </header>

          {isLoading && <progress aria-label="Загрузка" />}

          {!isLoading && error && (
            <p
              className="error"
              role="alert"
            >{error}</p>
          )}

          {!isLoading && !error && <UserList users={users} />}
        </article>

        <article>
          <header>
            <strong>Посты</strong>
            <br />
            <small>RTK Query · json-server</small>
          </header>

          <PostContainer />
          {/*<PostContainer2 />*/}
        </article>
      </main>

      <footer>
        <small>Посты приходят с json-server: <code>npm run server</code></small>
      </footer>
    </>
  )
}

export default App
