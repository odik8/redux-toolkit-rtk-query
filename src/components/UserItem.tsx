import type { IUser } from "../models/IUser.ts";

interface UserItemProps {
  user: IUser
}

const UserItem = ({ user }: UserItemProps) => {
  return (
    <li className="user-card">
      <span
        className="user-avatar"
        aria-hidden="true"
      >{user.name.charAt(0)}</span>

      <div className="user-body">
        <h2>{user.name}</h2>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    </li>
  )
}

export default UserItem
