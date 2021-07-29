import React, { useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from './CardAvatar';
import ListCard from './ListCard';
import Addmodal from './Addmodal';
import './styles/style.css';

function groupByKey(array, key) {
  return array.reduce((hash, obj) => {
    if (obj[key] === undefined) return hash;
    return Object.assign(hash, {
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    });
  }, {});
}

export default function Index({ tasks, settasks }) {
  const [ramdom] = useState(
    Math.floor(Math.random() * 30 + 5)
  );
  const [refresh, setrefresh] = useState(false);
  const [groupedTasks, setgroupedTasks] = useState({});

  useEffect(() => {
    const taskstoGroup = tasks || [];
    const grouped = groupByKey(taskstoGroup, 'theme');
    setgroupedTasks(grouped);
  }, [tasks]);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <div
          style={{
            background: '#fff',
            padding: '17px 5px 0px 26px',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <h3
            style={{
              fontWeight: 'bolder',
              color: 'black',
            }}>
            Brackets
          </h3>
          <div
            className='d-flex justify-content-between align-items-center '
            style={{ marginRight: '43px' }}>
            <AvatarGroup max={4} spacing={'small'}>
              {[...new Array(ramdom)].map((e) => (
                <CardAvatar />
              ))}
            </AvatarGroup>
            <h5
              className='m-3'
              style={{ cursor: 'pointer' }}>
              <b>Menu</b>
            </h5>
          </div>
        </div>
        <section className='lists-container' style={{height:'calc(97vh + 9rem)'}}>
          {Object.keys(groupedTasks).map((key) => (
            <div className='list'>
              <h3 className='list-title d-flex justify-content-between align-items-center'>
                {key}
                <i
                  class='fas fa-ellipsis-h'
                  style={{ cursor: 'pointer',color: "#CDCCCA"}}></i>
              </h3>
              <ul className='list-items'>
                {groupedTasks[key]?.map((e, i, array) => (
                  <TaskCard
                    data={e}
                    length={array.length}
                  />
                ))}
                <ListCard
                  settasks={settasks}
                  tasks={tasks}
                  refresh={refresh}
                  setrefresh={setrefresh}
                  ay7aja={key}
                />
              </ul>
            </div>
          ))}

          <button
            onClick={() => handleOpen()}
            className='add-list-btn btn  list-title'>
            <i class='far fa-plus-square'></i> Add a list
          </button>
          <Addmodal
            newTheme={true}
            settasks={settasks}
            tasks={tasks}
            refresh={refresh}
            setrefresh={setrefresh}
            open={open}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </section>
      </div>
    </>
  );
}
