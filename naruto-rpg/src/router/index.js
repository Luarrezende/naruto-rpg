import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';
import Unauthorized from '../pages/Unauthorized';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/mainpage" component={ MainPage } />
      <Route exact path="/profile" component={ Profile } />
      <Route exact path="/unauthorized" component={ Unauthorized } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Router;