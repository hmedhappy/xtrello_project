import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
// Layouts
import LoginLoyout from './layout/LoginLayout';
import DashboardLayout from './layout/DashboardLayout';
// Custom Routes
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
// Pages
import Dashboard from './pages/Dashboard';
import Authtification from './pages/Authtification';
import Brackets from './pages/Brackets';
import { GET_TASKS } from './Graphql/Queries';
import { useLazyQuery } from '@apollo/client';

export default function MainApp()
{
  const [getTasks, { data }] = useLazyQuery(GET_TASKS);
  const [tasks, settasks] = useState([]);
  const memoizedMutation = useCallback(
    () => getTasks(),
    [getTasks]
  );

  useEffect(() =>{
    memoizedMutation();
    if (data?.getTasks.length) {
      const array = data?.getTasks;
      settasks(array);
    }
    //eslint-disable-next-line
  }, [data, memoizedMutation, settasks]);

  return (
    <>
      <Switch>
        <PublicRoute
          layout={LoginLoyout}
          component={Authtification}
          path='/login'
        />
        <PrivateRoute
          layout={DashboardLayout}
          component={Dashboard}
          tasks={tasks}
          settasks={settasks}
          path='/'
          exact
        />
        <PrivateRoute
          layout={DashboardLayout}
          component={Brackets}
          tasks={tasks}
          settasks={settasks}
          path='/brackets'
        />
        <Route path='*'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </>
  );
}
