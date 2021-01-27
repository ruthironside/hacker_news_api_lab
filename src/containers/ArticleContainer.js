import React, {useState, useEffect} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleSearch from '../components/ArticleSearch';

const ArticleContainer = () => {

    const [articles, setArticles] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [input, setInput] = useState('');
 

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then(data => {
            let articleNumbers = data.slice(0,10)
            console.log(articleNumbers);
            const articlesToUse = articleNumbers.map((number) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${number}.json`)
                .then(res => res.json())
            })
            Promise.all(articlesToUse)
            .then((res) => {
                console.log(res);
                setArticles(res)
                setLoaded(true)
            })   
        })
    }

    const updateInput = async (input) => {
        const filtered = articles.filter(article => {
         return article.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setArticles(filtered);
     }

    return (
        <>
        <h1>Top Stories</h1>
        <ArticleSearch input={input} updateInput={updateInput} ></ArticleSearch>
        <ArticleList articles={articles} loaded={loaded}></ArticleList>
        
        </>
    )

}
export default ArticleContainer;