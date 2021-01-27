import React from 'react';
import Article from './Article';

const ArticleList = ({articles, loaded}) => {

    if(!loaded){
        return <p>Loading....</p>
    }

    const articleItems = articles.map((article, index) => {
        return (
            <Article article={article} key={index} position = {index +1}></Article>
        )
    });

    return (
        <ul>
       {articleItems}
       </ul>
       
    );

}

export default ArticleList;

