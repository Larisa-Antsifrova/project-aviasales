import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Suspense } from 'react';
import TicketsPage from './views/TicketsPage';
import HomePage from './views/HomePage';
import Header from './components/Header';

function App() {
  return (
    <>
      <Suspense fallback="Loading...">
        <Header />
        <main>
          <Switch>
            <Route exact path={'/'}>
              <HomePage />
            </Route>
            <Route path={'/ticket-info'}>
              <TicketsPage />
            </Route>
          </Switch>
        </main>
      </Suspense>
    </>
  );
}

export default App;
