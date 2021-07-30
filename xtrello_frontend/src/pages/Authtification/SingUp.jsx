import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { REGISTER } from '../../Graphql/Mutations';
import notify from '../../utils/Notifier/Notifier';
import { DisappearedLoading } from 'react-loadingg'

export default function SingUp({ setlog, log })
{

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("");
  const [date, setdate] = useState(`${ new Date() }`);

  const [Register, { loading, data }] = useMutation(REGISTER);

  useEffect(() =>
  {
    if (data) {
      if (data.Register._id) {
        setlog(!log)
        notify(`Vous etre inscrits, veuiller vous connecter `, 1);
      } else {
        notify('Erreur Inscription ')
      }
    }
    // eslint-disable-next-line
  }, [data])

  if (loading) return <div style={{ textAlign: "center" }}>Connexion...<DisappearedLoading style={{ position: "inherit !important", margin: 'auto' }} /></div>;



  return (
    <div className="box" style={{ margin: "15px", border: '0.5px solid #e83d31' }}>
      <div className="box-header">
        Bienvenue__a <span><img alt="sddsd" width="75" src="trelloLogo.png" /></span>
      </div>
      <div className="box-body overflow-scroll">
        <form onSubmit={(e) => { e.preventDefault(); Register({ variables: { data: { username, password, date_naissance: date } } }) }} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input required type="text" placeholder="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={({ target: { value } }) => setusername(value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input required type="password" placeholder="password" className="form-control" id="exampleInputPassword1" value={password} onChange={({ target: { value } }) => setpassword(value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Birthday</label>
            <input required type="date" className="form-control" id="exampleInputPassword1" value={date} onChange={({ target: { value } }) => setdate(value)} />
          </div>
          <button type="submit" className="btn btn-primary logg" style={{ color: '#e83d31' }}>Sign up</button>
        </form>
      </div>
    </div>

  )
}
