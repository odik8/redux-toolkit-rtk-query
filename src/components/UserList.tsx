import type { IUser } from "../models/IUser.ts";
import UserItem from "./UserItem.tsx";

interface UserListProps {
  users: IUser[]
}

const UserList = ({ users }: UserListProps) => {
  if (users.length === 0) {
    return <p className="empty">Пользователей нет</p>
  }

  return (
    <ul className="user-list">
      {users.map(user => (
        <UserItem
          key={user.id}
          user={user}
        />
      ))}
    </ul>
  )
}

export default UserList
