import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import NavBarContent from "../../utils/components/NavBarContent/NavBarContent";
import useStyles from "./styleHomePage";
import Users from "./components/Users/Users";
import Todo from "./components/Todo/Todo";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import { requestUsers } from "../../api/users";
import { requestTodo } from "../../api/todo";

export default function DashBoardPage() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      setUsers(await requestUsers());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedUsers.length > 0) {
        setTodos(await requestTodo(selectedUsers[0].id));
      }
    })();
  }, [selectedUsers]);

  const handleUsersSelected = (selection) => {
    setSelectedUsers(selection);
  };

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />

        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              className={clsx(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              React Challenge
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbarIcon}></div>
          <NavBarContent />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Switch>
                <Route
                  exact
                  path="/users"
                  render={(props) => (
                    <Users
                      {...props}
                      users={users}
                      onSelectionChange={handleUsersSelected}
                    />
                  )}
                />
                <Route
                  exact
                  path="/todo"
                  render={(props) => <Todo {...props} todos={todos} />}
                />
              </Switch>
            </Grid>
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}
