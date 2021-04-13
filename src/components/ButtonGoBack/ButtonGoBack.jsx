import { withRouter } from 'react-router-dom';

const ButtonGoBack = ({ history, location }) => {
  const handleGoBack = () => {
    history.push(location?.state?.from || '/');
  };
  return (
    <button type="button" onClick={handleGoBack}>
      Go back
    </button>
  );
};
export default withRouter(ButtonGoBack);
