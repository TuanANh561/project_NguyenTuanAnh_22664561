import { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap'
import axios from 'axios'

const PostList2 = () =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    const fetchPosts = async() => {
        setLoading(true)
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // const data = await response.json()
            setPosts(response.data.slice(0,10))//
        }catch(error){
            console.error("Lỗi khi lấy dữ liệu: ", error)
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <Container>
            <div className='text-center'>
                <Button onClick={fetchPosts} className='m-2'>Tải lại</Button>
                <h2>Danh sách bài viết</h2>
            </div>
            {loading ? <p>Đang tải...</p> : (
                <div className="d-flex flex-wrap">
                    {posts.map(post => (
                        <Card key={post.id} className="m-1 p-2" style={{ width: '32%' }}>
                            <Card.Body>
                                <Card.Title>{post.id}. {post.title}</Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    )
}

export default PostList2;