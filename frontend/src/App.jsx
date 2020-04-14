import React from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import menu from './menu';

//import WebFont from 'webfontloader';
//
//WebFont.load({
//  google: {
//    families: [
//      'Overpass:600',
//      'Source Sans Pro:400,700',
//      'sans-serif'
//    ]
//  }
//});

function App() {
  return(
    <Switch>
      {routes.map((route, idx) => <Route key={idx} {...route}/>)}
    </Switch>
  );
}

export default App;