import React from 'react';
import Header from './desktop/Header/Header';
import Main from './desktop/Main/Main';
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
