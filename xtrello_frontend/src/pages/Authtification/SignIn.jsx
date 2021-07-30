import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { LOGIN } from '../../Graphql/Queries';
import { DisappearedLoading } from 'react-loadingg';
import notify from '../../utils/Notifier/Notifier';


export default function SignIn()
{
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("");
  const [LoginF, { loading, data }] = useLazyQuery(LOGIN);

  useEffect(() =>
  {
    if (data) {
      if (data.Login) {
        notify(`Bienvenue ${ data.Login.username } `, 1);
        localStorage.setItem('auth', JSON.stringify(data.Login))
        window.location.pathname = '/brackets'
      } else {
        notify(' Password or Username Incorrect')
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
        <form onSubmit={(e) => { e.preventDefault(); LoginF({ variables: { data: { username, password } } }); }} >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input required type="text" placeholder='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={username} onChange={({ target: { value } }) => setusername(value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input required type="password" placeholder="password" className="form-control" id="exampleInputPassword1" value={password} onChange={({ target: { value } }) => setpassword(value)} />
          </div>
          <button type="submit" className="btn btn-primary logg" style={{ color: '#e83d31' }}>Connect</button>
        </form>
      </div>

    </div>

  )
}
