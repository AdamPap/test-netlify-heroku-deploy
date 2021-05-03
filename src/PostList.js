import React, { useState } from 'react'
import axios from 'axios'

export default function PostList() {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        const posts = await axios({
            method: 'GET',
            url: 'https://test-netlify-heroku-deploy.herokuapp.com/posts'
        })
        console.log(posts.data)
        setPosts(posts.data)
    }

    return (
        <div>
            <button onClick={getPosts}>Get All Posts</button>
            <ul>
                {posts.map(post => {
                    return <li>{post.title}</li>
                })}
            </ul>
        </div>
    )
}
