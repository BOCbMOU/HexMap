import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import { HrefPath } from '../types/Paths.types';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={HrefPath.base.main} component={Main} exact />

        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
