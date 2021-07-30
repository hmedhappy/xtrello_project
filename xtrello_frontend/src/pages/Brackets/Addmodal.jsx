import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../../Graphql/Mutations';
import notify from '../../utils/Notifier/Notifier';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Addmodal({
  theme = "",
  settasks,
  newTheme = false,
  open,
  handleClose,
})
{
  const classes = useStyles();

  const [themee, setthemee] = useState(theme)
  const [title, settitle] = useState("")
  const [contenu, setcontenu] = useState("")
  const [addTask, { data }] = useMutation(ADD_TASK);
  const [user] = useState(
    JSON.parse(localStorage.getItem('auth'))
  );

  useEffect(() =>
  {
    if (data?.addTask?._id) {
      notify('Task ajouté avec succes', 1);
      settasks(old => [...old, {
        title,
        theme: themee,
        photo: '',
        contenu,
        status: 'loading',
        date_creation: `${ new Date() }`,
        date_viewed: "",
        creator: user?._id
      }])
      handleClose()
    }
    //eslint-disable-next-line
  }, [data, settasks])


  const addTaskFunction = () =>
  {
    addTask({
      variables: {
        data: {
          title,
          theme: themee,
          photo: '',
          contenu,
          status: 'loading',
          date_creation: `${ new Date() }`,
          date_viewed: "",
          creator: user?._id
        }
      }
    })
  }


  return (
    <>
      <div>
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{timeout: 500,}}>
          <Fade in={open}>
            <div className={classes.paper + 'container modall'}>
              <form onSubmit={(e) => { e.preventDefault(); addTaskFunction() }} >
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>
                    Theme
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter emaill'
                    value={themee}
                    onChange={({ target: { value } }) =>{
                      if (newTheme) {
                        setthemee(value)
                      }}}/>
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>
                    Title
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='title'
                    value={title}
                    onChange={({ target: { value } }) => settitle(value)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputPassword1'>
                    Contenu
                  </label>
                  <textarea
                    minLength="20"
                    type='text'
                    className='form-control'
                    id='exampleInputPassword1'
                    placeholder='contenu'
                    value={contenu}
                    onChange={({ target: { value } }) => setcontenu(value)}
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-primary'>
                  Ajouter <i style={{ fontSize: "15px", marginLeft: "5px" }} className="fas fa-plus"></i>
                </button>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
