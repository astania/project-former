
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './navigation/NavBar';
import Header from './navigation/Header';
import FormBuilderContainer from '../containers/FormBuilderContainer';
import FormViewerContainer from '../containers/FormViewerContainer';
import HomePage from '../containers/HomePageContainer'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/forms/new">
            <FormBuilderContainer />
          </Route>
          <Route path="/forms">
            <FormViewerContainer />
          </Route>
          <Route path="/submissions">
            <FormSubmissionsContainer />
          </Route>
          <Route exact path="/">
            <HomePageContainer />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
