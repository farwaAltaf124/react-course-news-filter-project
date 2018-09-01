import React from 'react';
import NewsItems from './news-list-items';
import './style.css';

const newsList= (props) => {
   const lists=props.news.map((list)=>{
return(
  <NewsItems key={list.id} list={list}/>
)
    })

    return (
    <div>
    
{lists}

    </div>
  )
}
export default newsList;