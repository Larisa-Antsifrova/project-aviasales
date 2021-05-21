import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketsPage from './views/TicketsPage';
import HomePage from './views/HomePage';
import NotFoundPage from './views/NotFoundPage';
import Header from './components/Header';

function App() {
  return (
    <Suspense fallback="Loading...">
      <Header />
      <main>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route exact path={'/ticket-info'}>
            <TicketsPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </main>
    </Suspense>
  );
}

export default App;
