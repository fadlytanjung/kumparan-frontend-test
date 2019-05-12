import React from 'react';
import { BrowserRouter,Route ,Switch } from 'react-router-dom';
import dashboard from './components/dashboard';
import NavigationBar from './components/navigation';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/" component={dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
}

export default App;
