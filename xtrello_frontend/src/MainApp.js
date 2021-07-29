import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import LoginLoyout from './layout/LoginLayout';
import DashboardLayout from './layout/DashboardLayout';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Dashboard from './pages/Dashboard';
import Authtification from './pages/Authtification';
import Brackets from './pages/Brackets';
import { GET_TASKS } from './Graphql/Queries';
import { useLazyQuery } from '@apollo/client';
// import Pusher from 'pusher';


export default function MainApp() {
  const [getTasks, { data }] = useLazyQuery(GET_TASKS);

  const memoizedMutation = useCallback(
    () => getTasks(),
    [getTasks]
  );
 

  const [tasks, settasks] = useState([]);

  // console.log("creating pusher");
//   var pusher = new Pusher("5ccd6d0631daf6f4f397", { cluster: "eu" });
// pusher?.connection?.bind("connected", function () {
//   alert("Realtime is go!");
// });

  // var channel = pusher.subscribe('my-channeldfr');
  // channel.bind('my-event', function(data) {
  //   alert(JSON.stringify(data));
  // });

  

  useEffect(() => {
    memoizedMutation();
    if (data?.getTasks.length) {
      const array = data?.getTasks;
      settasks(array);
    }
    // socket.emit('connection')
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
