import { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import routes from '../../routes';
import Cast from '../Cast';
import Reviews from '../Reviews';
class AdditionalInfo extends Component {
  render() {
    const { id, location } = this.props;

    return (
      <>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/cast`,
                state: { from: location?.state?.from },
              }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={{
                pathname: `/movies/${id}/reviews`,
                state: { from: location?.state?.from },
              }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path={`${routes.moviesDetails}/cast`} component={Cast} />
          <Route path={`${routes.moviesDetails}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}

export default withRouter(AdditionalInfo);
