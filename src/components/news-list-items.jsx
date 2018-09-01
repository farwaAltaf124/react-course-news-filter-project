import React from 'react';

const listItems=(props) => {

    return (
   
    <div className='list-item' >

        <h2>{props.list.title}</h2>
        <p>{props.list.feed}</p>
        
    </div>
  )
}
export default listItems;