import React, {useState} from "react";
import Box from "@mui/material/Box";
import ArticleDescription from "./article_description";
import ArticleQuickInfo from "./article_quick_info";
import "./article.css";

export default function Article(props){
  const [showDescription, setShowDescription] = useState(false);

  return(
    <Box 
      className="box"
    >
      {
        showDescription 
        ? <ArticleDescription 
            url={props.url} 
            title={props.title} 
            description={props.description} 
            author={props.author}
            source={props.source}
            setShowDescription={setShowDescription} 
            showDescription={showDescription}
          /> 
        : <ArticleQuickInfo
            url={props.url} 
            title={props.title} 
            description={props.description} 
            author={props.author}
            source={props.source}
            setShowDescription={setShowDescription}  
            showDescription={showDescription}
          />
      }
    </Box>
  );
}