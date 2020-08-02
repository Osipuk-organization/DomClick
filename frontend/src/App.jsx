import React, {Fragment} from 'react';
import routes from './routes';
import { Switch, Route } from 'react-router-dom';
import menu from './menu';

import { Footer } from 'components/Footer';
import { TopMenu } from 'components/TopMenu';

import 'assets/global.scss';

import 'assets/swiper.scss';
// import '../pug/sass/front.scss';
import 'assets/img/offers1.jpg';
import 'assets/img/offers2.jpg';
import 'assets/img/offers3.jpg';
import 'assets/img/offers4.jpg';
import 'assets/svg/logo.svg';
import 'assets/svg/app.svg';

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