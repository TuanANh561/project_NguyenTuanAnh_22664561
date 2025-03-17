import { useState } from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import PostList from './fetchAPI/PostList'
import PostList2 from './axios/PostList2'

function App() {

  return (
    <Container>
      <div>
          <h1>Ứng dụng Fetch API</h1>
          <hr />
          {/* <PostList /> */}
          <PostList2 />
      </div>
    </Container>

  )
}

export default App
