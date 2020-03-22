import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll',
        border: '1px solid black', height: '71vh',
        padding: '1vh'}}>
            {props.children}
        </div>
    )
} 

export default Scroll;