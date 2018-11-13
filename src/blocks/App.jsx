import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import './common/common.scss';
import { cn } from '@bem-react/classname';

const cnApp = cn('App');

class App extends React.Component {
  render() {
    return (
      <div className={cnApp()}>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
