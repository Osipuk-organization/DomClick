import React, {Fragment} from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import menu from './menu';
import 'pug/sass/swiper.scss';
import '../pug/sass/front.scss';

import { Footer } from 'components/Footer';
import { TopMenu } from 'components/TopMenu';

import 'pug/img/offers1.jpg';
import 'pug/img/offers2.jpg';
import 'pug/img/offers3.jpg';
import 'pug/img/offers4.jpg';
import 'pug/svg/logo.svg';
import 'pug/svg/app.svg';

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