import { Link } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <Link to={routes.home}>Home</Link>
      <br />
      <Link to={routes.movies}>Movies</Link>
    </nav>
  );
};
export default Navigation;
