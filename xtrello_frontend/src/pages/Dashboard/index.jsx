import React, { useEffect, useState } from 'react';
import RecentlyViewed from './RecentlyViewed';
import NewTasks from './NewTasks';
import ProcessTask from './ProcessTask';
import CompletedTask from './CompletedTask';

import './styles/dashboard.css';
import './styles/Task.css';

export default function Index({tasks, settasks}) {

 var [completed, setcompleted] = useState([])
 var [process, setprocess] = useState([]);
 var [recetnly, setrecetnly] = useState([])
 var [viewed, setviewed] = useState([])

 useEffect(() => {
   if (tasks) {
     setprocess(tasks?.filter((e)=>e.status==="loading"))
     setcompleted(tasks?.filter((e)=>e.status==="completed"))     
     setrecetnly(tasks?.slice().sort((a,b)=>b.date_creation-a.date_creation))  
     setviewed(tasks?.slice().sort((a,b)=>b.date_viewed-a.date_viewed))       
   }
 },[tasks])
  return (
    <>
      <div className='mainTab' style={{paddingBottom:'45px'}}> 
        <RecentlyViewed list={viewed} />
        <NewTasks  list={recetnly} />
        <ProcessTask  list={process} />
        <CompletedTask  list={completed} />
      </div>
    </>
  );
}
