import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import React from "react";
import Box from "@mui/material/Box";

export default function Article(props){
    const handleOnClick = (url) => window.location.href = props.url;

    return(
        <Box sx={{ maxWidth: "50%" }}>
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
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={() => handleOnClick(props.url)}>Learn More</Button>
          </CardActions>
        </Card>
        </Box>
    );
}