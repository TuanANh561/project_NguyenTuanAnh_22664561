import { Link } from 'react-router-dom';

const users = [
    { id: 1, name: 'Nguyễn Văn A' },
    { id: 2, name: 'Nguyễn Tuấn Anh' },
    { id: 3, name: 'Nguyễn Văn C' },
    { id: 4, name: 'Trần Thị D' },
]

function UserList () {
    return (
        <ul className='listUser'>
            {users.map((user) => (
                <li key={user.id} className="p-3">
                    <Link className='user p-3' style={{textDecoration : 'none'}} to={`/user/${user.id}`}>{user.id}. {user.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default UserList;