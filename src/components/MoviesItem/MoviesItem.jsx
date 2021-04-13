import { Link, withRouter } from 'react-router-dom';

const MoviesItem = ({ movie, location }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: location },
        }}
      >
        {movie.title}
      </Link>
    </li>
  );
};
export default withRouter(MoviesItem);
