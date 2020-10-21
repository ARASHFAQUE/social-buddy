import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Details/Details';

const Comment = () => {
    const { postId } = useParams();
    const [ post, setPost ] = useState([]);
    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then( res => res.json())
        .then( data => {
            setPost(data)
            // data.map( pt => setPost(pt))
        })
    },[])
    console.log(post);
    return (
        <div>
            {
                post.map( pt => <Details post={pt}></Details>)
            }
        </div>
    );
};

export default Comment;