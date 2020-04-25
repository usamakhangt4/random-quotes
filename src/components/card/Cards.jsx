import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Button,
  Snackbar,
} from "@material-ui/core";
import { Share, FileCopy } from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";
import MuiAlert from "@material-ui/lab/Alert";
import Loader from "../loader/Loader";
import styles from "./Cards.module.css";
export default function Cards({ quotes }) {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(quote.text);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (event, value) => {
    setPage(value - 1);
  };
  // if (quotes[0] != null) {
  //   console.log(page);
  // }
  const quote = quotes[page];
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <React.Fragment>
      <Grid container justify="center">
        {!quote ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Grid
              item
              component={Card}
              xs={10}
              style={{ marginTop: 50 }}
              gutterBottom
            >
              <CardContent className={styles.container}>
                <Typography variant="h4" color="textPrimary" gutterBottom>
                  <q>{quote.text}</q>
                </Typography>
                <Typography color="textSecondary" variant="body2">
                  {quote.author}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton title="Share">
                  <Share />
                </IconButton>
                <IconButton title="Copy to clipboard" onClick={handleClick}>
                  <FileCopy />
                </IconButton>
              </CardActions>
            </Grid>

            <Grid item component={Card} style={{ marginTop: 50 }} gutterBottom>
              <Pagination
                color="secondary"
                size="large"
                count={quotes.length}
                page={page + 1}
                onChange={handleChange}
              />
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Coppied to clipboard !!!
              </Alert>
            </Snackbar>
          </React.Fragment>
        )}
      </Grid>
    </React.Fragment>
  );
}
