import React, {useState} from 'react'
import * as MaterialStyle from '@material-ui/core/styles'
import {Container, CssBaseline, Toolbar} from "@material-ui/core";
import AppDrawer from "../modules/Drawer";
import AppBar from "../modules/AppBar"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ShowMealPage from "./ShowMealPage";

const style = (theme: MaterialStyle.Theme) => MaterialStyle.createStyles({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 1),
  }
})

const useStyles = MaterialStyle.makeStyles(style)

export default function App() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleDrawerOpen = () => {
    setMenuOpen(true)
  }
  const handleDrawerClose = () => {
    setMenuOpen(false)
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline/>
      
      {/* App Bar */}
      <AppBar title="Menus"
              handleDrawerOpen={handleDrawerOpen}
              menuOpen={menuOpen}/>
      
      <BrowserRouter>
        {/* Drawer Menu */}
        <AppDrawer menuOpen={menuOpen}
                   handleDrawerOpen={handleDrawerOpen}
                   handleDrawerClose={handleDrawerClose}/>
        
        {/* Main Content */}
        <main className={classes.content}>
          <Toolbar/>
          <Container>
            <Switch>
              <Route exact path="/meals" render={() => <ShowMealPage/>}/>
              <Route path="/calendar" render={() => <div> calendar </div>}/>
              <Route path="/download" render={() => <div> download </div>}/>
              <Route path="/github" render={() => <div> github </div>}/>
              <Route path="/about" render={() => <div> about </div>}/>
            </Switch>
          </Container>
        </main>
      </BrowserRouter>
    </div>
  );
}