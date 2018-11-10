import React from 'react';
import Button from './common/button/button';
import { cn } from '@bem-react/classname';

const cnApp = cn('App');

class App extends React.Component {
  render() {
    return (
      <div className={cnApp()}>
        <Button>Click mee</Button>
      </div>
    );
  }
}

export default App;
