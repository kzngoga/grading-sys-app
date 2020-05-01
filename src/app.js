import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import store from './redux/store';
import Home from './pages/Home';
import SuperAdminHome from './pages/spAdmin/Home';
import AdminHome from './pages/admin/Home';
import AddUsers from './pages/spAdmin/AddUsers';
import UpdateUsers from './pages/spAdmin/UpdateUsers';
import ViewUsers from './pages/spAdmin/ViewUsers';
import UserProfile from './pages/spAdmin/UserProfile';
import DosHome from './pages/dos/Home';
import TeacherHome from './pages/teacher/Home';
import StudentHome from './pages/student/Home';
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
        <Route path="/super/admin/login" component={SuperAdmin} />
        <Route path="/student/login" component={StudentLogin} />
        <Route path="/teacher/login" component={TeacherLogin} />
        <Route path="/super/admin/home" component={SuperAdminHome} />
        <Route path="/admin/home" component={AdminHome} />
        <Route path="/users/add/new" component={AddUsers} />
        <Route path="/users/view/" component={ViewUsers} />
        <Route path="/users/view/page/:pageNum" component={ViewUsers} />
        <Route path="/user/profile/:user_id" component={UserProfile} />
        <Route path="/user/edit/:user_id" component={UpdateUsers} />
        <Route path="/dos/home" component={DosHome} />
        <Route path="/teacher/home" component={TeacherHome} />
        <Route path="/student/home" component={StudentHome} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
