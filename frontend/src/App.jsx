import React, { Fragment, Suspense, useEffect } from 'react';
import routes from './routes';
import { Switch, Route, useLocation } from 'react-router-dom';
import menu from './menu';
import 'assets/swiper.scss';
import 'assets/global.scss';

import { TopMenuContainer } from 'containers/TopMenuContainer';
import { Footer } from 'components/Footer';
import { ErrorBoundary } from 'components/ErrorBoundary';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <Fragment>
      <div className="wrap-container">
        <ErrorBoundary>
          <TopMenuContainer menu={menu} />
        </ErrorBoundary>
        <main className="main">
          <ErrorBoundary>
            <Suspense fallback={
              <div className="_container _row">
                <div className="_col-12">Loading...</div>
              </div>
            }>
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
          </ErrorBoundary>
        </main>
      </div>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </Fragment>
  );
}

export default App;