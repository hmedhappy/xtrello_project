import React from 'react';
import Addmodal from './Addmodal';

export default function ListCard({
  ay7aja,
  settasks,
  tasks,
  refresh,
  setrefresh,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button
        type='button'
        className='add-card-btn btn list-title'
        onClick={handleOpen}>
        Add a cardd
      </button>
      <Addmodal
        theme={ay7aja}
        settasks={settasks}
        tasks={tasks}
        refresh={refresh}
        setrefresh={setrefresh}
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </>
  );
}
