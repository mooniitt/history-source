import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { createBrowserHistory } from 'history';
import { createBrowserHistory } from './lib/index';

const history = createBrowserHistory();
class App extends React.Component {
  render() {
    return (
      <div>
        <a onClick={() => history.push('/')}>root</a>
        <br />
        <a onClick={() => history.push('/home')}>home page</a>
        <br />
        <a onClick={() => history.push('/about')}>about page</a>
        <br />
        <a onClick={() => history.goBack()}>返回</a>
      </div>
    );
  }
}

export default App;
