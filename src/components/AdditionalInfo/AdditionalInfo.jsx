import { Component } from 'react';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import Cast from '../Cast';
import Reviews from '../Reviews';
import styles from './AdditionalInfo.module.scss';

class AdditionalInfo extends Component {
  render() {
    const { id, location } = this.props;

    return (
      <>
        <h4>Additional information</h4>
        <nav className={styles.menu}>
          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
            to={{
              pathname: `/movies/${id}/cast`,
              state: { from: location?.state?.from },
            }}
          >
            Cast
          </NavLink>

          <NavLink
            className={styles.NavLink}
            activeClassName={styles.NavLink__active}
            to={{
              pathname: `/movies/${id}/reviews`,
              state: { from: location?.state?.from },
            }}
          >
            Reviews
          </NavLink>
        </nav>
        <Switch>
          <Route path={`${routes.moviesDetails}/cast`} component={Cast} />
          <Route path={`${routes.moviesDetails}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}

AdditionalInfo.propTypes = {
  id: PropTypes.number.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInfo);
