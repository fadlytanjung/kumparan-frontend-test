import React from 'react';
import { BrowserRouter,Route ,Switch } from 'react-router-dom';
import dashboard from './components/dashboard';
// import error from './components/error';
import NavigationBar from './components/navigation';
import './css/App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <div>
          <NavigationBar />
          <Switch>
            <Route path="/" component={dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
    );
}

export default App;
