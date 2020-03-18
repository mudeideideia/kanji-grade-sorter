import React, { useState } from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom'
import './App.css';
import MainPage from './pages/MainPage';
import StartPage from './pages/StartPage';

function App() {
  const [ state , setState] = useState([])

  const setContent = value => { 
    setState( value )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} render={() => <StartPage setContent={setContent} />}  />
        <Route path='/sorter' exact={true} render={() => <MainPage content={state} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;