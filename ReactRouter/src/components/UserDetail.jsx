import { useParams } from 'react-router-dom';

const users = [
    { 
        id: 1, name: 'Nguyễn Văn A', 
        age: 20, 
        address: 'Hồ Chí Minh', 
        email: "a@gmail.com",
        image: "/imgs/avatar.jpg"
    },
    { 
        id: 2, name: 'Nguyễn Tuấn Anh', 
        age: 25, 
        address: 'Hồ Chí Minh', 
        email: "anh22664561@gmail.com",
        image: "/imgs/avatar2.jpg"
    },
    { 
        id: 3, name: 'Nguyễn Văn C', 
        age: 30, 
        address: 'Hà Nội', 
        email: "c@gmail.com",
        image: "/imgs/avatar.jpg"
    },
    { 
        id: 4, name: 'Trần Thị D', 
        age: 35, 
        address: 'Hà Nội', 
        email: "d@gmail.com",
        image: "/imgs/avatar2.jpg"
    },
]

function UserDetail () {
    const { id } = useParams()
    const user = users.find((u) => u.id === parseInt(id))
    if(!user) {
        return <h2>Người dùng không tồn tại</h2>
    }
    return (
        <div>
            <img className='avatar' src={user.image} alt="avatar" />
            <h1>{user.name}</h1>
            <hr />
            <p><b>Tuổi:</b> {user.age}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Address:</b> {user.address}</p>
        </div>
    )
}

export default UserDetail;