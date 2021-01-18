import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axiox from "axios";
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
        minWidth: 400
  }
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [url, setUrl] = useState(null);
    const [longUrl, setLongUrl] = useState();

    const getUrl = () => {
        let body = {
            longUrl: longUrl
        }
        axiox.post("http://localhost:4500/api/url/shorten", body).then(res => {
            console.log(res.data);
            setUrl(res.data);
        })
    }

  return (
    <Card className={classes.root} >
      <CardHeader
        title="Short your Long Url"
      />
          <CardContent>
          {!url ? <Grid
  container
  spacing={0}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ marginTop: '20px' }}
 >
              <TextField id="filled-basic" onChange={(e) => setLongUrl(e.target.value)} label="Long Url" />
              <Button variant="outlined" onClick={getUrl} color="primary" style={{ marginLeft: "9px" }}>
        Get Short Url
      </Button>
        
              </Grid> : null }
               {url ? <p variant="body2" style={{ marginTop: "10px" }}>
                 <b>Long Url:</b> { url.longUrl }
                  </p> :  null}
                 
                  {url ? 
                      <p>
                          <b>Short Url:</b>  <a href={url.shortUrl} target="_blank"> {url.shortUrl} </a> 
                    </p>
                  : null}
                  
          </CardContent>
          <CardActions>
              {url ? 
              <Button variant="outlined" onClick={() => setUrl(null)} color="primary" style={{ marginLeft: "9px" }}>
              Create New short url
            </Button>
              : null}
          </CardActions>
    </Card>
  );
}
