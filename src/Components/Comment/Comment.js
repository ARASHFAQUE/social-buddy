import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';

const Comment = () => {
    const { postId } = useParams();
    const [ comment, setComment ] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then( res => res.json())
        .then( data => {
            setComment(data)
            // data.map( pt => setPost(pt))
        })
    },[])
    const [ post, setPost ] = useState({});
    useEffect( () => {
      const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
      fetch(url)
      .then( res => res.json())
      .then( data => setPost(data))
    }, [])
    //console.log(post);
    //console.log(post);
    return (
        <div>
            <h1>Title: {post.title}</h1>
            <h1 style={{fontSize:'20px'}}>Post Body: {post.body}</h1>
            <h3>Comments</h3>
            {
                comment.map( cmt => <Details comment={cmt}></Details>)
            }
        </div>
    );
};

export default Comment;