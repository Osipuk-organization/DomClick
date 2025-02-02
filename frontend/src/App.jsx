import React, { Fragment, Suspense, useEffect } from 'react';
import routes from './routes';
import { Switch, Route, useLocation } from 'react-router-dom';
import menu from './menu';
import 'assets/swiper.scss';
import 'assets/global.scss';

import { TopMenuContainer } from 'containers/TopMenuContainer';
import { Footer } from 'components/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <Fragment>
      <div className="wrap-container">
        <TopMenuContainer menu={menu} />
        <main className="main">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              {routes.map(
                function(route, idx) {
                  return (
                    <Route
                      key={idx}
                      {...route}
                    />
                  )
                }
              )}
            </Switch>
          </Suspense>
        </main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;