
function Article(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.author}</p>
            <p>{props.source}</p>
            <p>{props.description}</p>
            <p>{props.url}</p>
        </div> 
    );
}

export default Article;