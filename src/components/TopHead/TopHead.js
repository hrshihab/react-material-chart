import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHead = () => {
  const [article,setArticle]=useState([]);
  useEffect(( () =>
  {
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=dc57e2c4a70c4050ad3dcef1b4c4f900";
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setArticle(data.articles);
    })
  }

    
  ),[])
  
  return (
    <div>
      {
        
        article.map((pd) =>
              <News  news={pd}></News>
        )
      }
    </div>
  );
};

export default TopHead;