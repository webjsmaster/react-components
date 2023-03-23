import { Component } from 'react';
import scss from './ErrorPage.module.scss';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../../utils/consts';

class ErrorPage extends Component {
  render() {
    return (
      <div className={scss.wrapper} data-testid="error-page">
        <div className={scss.title}>404</div>
        <div>This is page not found</div>
        <Link to={HOME_ROUTE} className={scss.link}>
          Home page
        </Link>
      </div>
    );
  }
}

export default ErrorPage;
