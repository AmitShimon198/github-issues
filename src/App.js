import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import IssuesList from './components/issuesList';
import IssueDetail from './components/issueDetail';
const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/issues" exact component={IssuesList} />
          <Route path='/issues/:id' component={IssueDetail} />
          <Redirect to="/issues" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
