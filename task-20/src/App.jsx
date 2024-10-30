import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskFrom from './components/TaskFrom'
import TaskDetail from './components/TaskDetail'
import Header from './Header'


const App = () => {
  return (
    <Router>
      <Switch>
        <Header/>
        <Route exact path="/" component={TaskList}/>
        <Route exact path="/add" component={TaskFrom}/>
        <Route exact path="/edit/:id" component={TaskFrom}/>
        <Route exact path="/detail/:id" component={TaskDetail}/>
      </Switch>
    </Router>
  )
}

export default App