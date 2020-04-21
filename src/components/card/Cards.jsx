import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
} from "@material-ui/core";
import { Favorite, Share, FileCopy } from "@material-ui/icons";
import styles from "./Cards.module.css";
export default function Cards({ quotes }) {
  if (quotes[0] != null) {
    console.log(typeof quotes);
  }

  return (
    <div>
      <Grid container spacing={6} justify="center">
        {!quotes[0]
          ? "loading..."
          : quotes.map((quote, i) => (
              <Grid
                item
                component={Card}
                xs={10}
                style={{ marginTop: 50 }}
                key={i}
              >
                <CardContent className={styles.container}>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    {quote.text}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {quote.author}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton title="Save for later">
                    <Favorite />
                  </IconButton>
                  <IconButton title="Share with loved ones">
                    <Share />
                  </IconButton>
                  <IconButton title="Copy to clipboard">
                    <FileCopy />
                  </IconButton>
                </CardActions>
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
