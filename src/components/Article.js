import React from 'react';

const Article = ({article}) => {
    return (
       <li>
           <a href={article.url}><h3>{article.title}</h3></a>
           <p>{article.by}</p>
       </li> 
    )
}

export default Article;