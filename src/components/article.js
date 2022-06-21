import React, {useState} from "react";
import Box from "@mui/material/Box";
import ArticleDescription from "./article_description";
import ArticleQuickInfo from "./article_quick_info";

export default function Article(props){
  const [showDescription, setShowDescription] = useState(false);

  const onBoxClick = () => {
    setShowDescription(!showDescription);
  }

  return(
    <Box sx={{ maxWidth: "30%", marginTop: "50px" }} onClick={onBoxClick}>
      {
        showDescription 
        ? <ArticleDescription 
            url={props.url} 
            title={props.title} 
            description={props.description} 
            author={props.author}
            source={props.source} 
          /> 
        : <ArticleQuickInfo
            url={props.url} 
            title={props.title} 
            description={props.description} 
            author={props.author}
            source={props.source}  
          />
      }
    </Box>
  );
}