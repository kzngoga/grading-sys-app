import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import store from './redux/store';
import Home from './pages/Home';
import AdminHome from './pages/admin/Home';
import DosHome from './pages/dos/Home';
import SuperAdmin from './pages/SuperAdmin';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import NotFound from './pages/NotFound';

library.add(fab, fas);

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/super-admin" component={SuperAdmin} />
        <Route exact path="/student-login" component={StudentLogin} />
        <Route exact path="/teacher-login" component={TeacherLogin} />
        <Route exact path="/admin/home" component={AdminHome} />
        <Route exact path="/dos/home" component={DosHome} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
