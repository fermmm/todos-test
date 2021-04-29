import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./stylesGridContainer";

export default function GridContainer(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper className={fixedHeightPaper}>{props.children}</Paper>
    </Grid>
  );
}
