import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [ posts, setPosts ] = useState([]);
    useEffect( () => {
      const url = `https://jsonplaceholder.typicode.com/posts`;
      fetch(url)
      .then( res => res.json())
      .then( data => setPosts(data))
    }, [])
    //console.log(posts);
    return (
        <div>
            {
                posts.map(pts => <Post posts={pts}></Post>)
            }
        </div>
    );
};

export default Home;