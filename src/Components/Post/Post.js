import React from 'react';
import { Link } from 'react-router-dom';
import Details from '../Details/Details';
import { Button } from '@material-ui/core';

const Post = ( props ) => {
    //const {posts} = props;
    const { title, id, } = props.posts;
    const postStyle = { 
        border: '3px solid blue',
        borderRadius: '5px',
        margin: '15px',
        padding: '10px',
        fontSize: '12px',
        boxShadow: '5px 8px 5px gray',
        textAlign: 'center'
    }
    const titleUpper = title.toUpperCase();
    return (
        <div style={postStyle}>
            <h2>Id : {id}</h2>
            <h2>{titleUpper}</h2>
            <Link to={`/comment/${id}`}><Button variant="contained" color="primary">See More</Button></Link>
        </div>
    );
};

export default Post;