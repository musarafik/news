import {React, useState, useEffect} from "react";
import Article from "./article"
import {buildUrl} from "../utilities"

function ArticleList(){
    const [articlesList, setArticlesList] = useState([]);

    useEffect(() =>  {
        fetch(buildUrl("/news/all"))
        .then(response => response.json())
        .then(response => response["articles"])
        .then(articles => setArticlesList(articles))
    }, []);

    return (
        <div>
            {articlesList.map((article, i) => (
                <Article key={i}
                    title={article.title} 
                    author={article.author}
                    description={article.description}
                    source={article.source.name}
                    url={article.url}
                />
            ))}
        </div>
    );
}

export default ArticleList;