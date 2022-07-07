import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import React from "react";

export default function ArticleQuickInfo(props){
    const onLinkClick = (url) => window.location.href = props.url;

    return(
        <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.source}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.author}
                </Typography>
            </CardContent>
            <CardActions className="articleButtonsContainer">
                <Button size="small" onClick={() => onLinkClick(props.url)}>View Full Article</Button>
                <Button size="small" onClick={() => props.setShowDescription(true)}>View Summary</Button>
            </CardActions>
        </Card>
    );
}