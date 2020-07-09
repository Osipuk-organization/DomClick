import React, {Fragment} from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import menu from './menu';
import '../pug/sass/index.scss';

import { Footer } from 'components/Footer';
import { TopMenu } from 'components/TopMenu';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Roboto:300,400,500,600,700,800,900',
      'sans-serif'
    ]
  }
});

function App() {
  return(
    <Fragment>
      <div className="wrap-container">
        <TopMenu menu={menu} />
        <main className="main">
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
          </Switch>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;