import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Details = ( props ) => {
    const { name, body } = props.comment;
    const commentStyle = {
        background: '#d3d3d3',
        marginTop: '10px',
        padding: '10px',
        borderRadius: '10px',
        fontSize: '10px',
    }
    //console.log(props.post.name);
    return (
            <div style={commentStyle}>
                <h2>Name: {name.toUpperCase()}</h2>
                <h4>Body: {body}</h4>
            </div>
    );
};

export default Details;