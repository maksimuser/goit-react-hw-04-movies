import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import routes from './routes';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MoviesDetailsPage';

const App = () => {
  return (
    <>
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />

        <Route path={routes.moviesDetails} component={MovieDetailsPage} />

        <Route component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
