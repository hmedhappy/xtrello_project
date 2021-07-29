import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { DisappearedLoading } from 'react-loadingg';
import { logout } from '../utils/Logout';


export default function Header() {
  const [toggle, setToggle] = useState();
  const history = useHistory()
  return (
    <>
      {/* Preloader */}
      <div className="preloader d-flex justify-content-center align-items-center" style={{backgroundColor:"#fff"}}>
        <img
          className="animation__shake"
          src="trelloLogo.png"
          alt="AdminLTELogo"
          height="auto"
          width={150}
        />
        <DisappearedLoading           style={{transform:'translateY(-35px) ! important'}}
/>
      </div>
      {/* Navbar */}
      <nav  style={{height:'45px',overflow:"hidden"}} className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
          <li className="nav-item no-extra-margin" style={{position:'fixed',bottom:'40px',borderRadius:'50%',right:'0px'}}>
            <Link
              className="nav-link"
              data-widget="pushmenu"
              to="#"
              role="button"
            >
              <i className="far fa-comment-dots" style={{border:'3px solid #983737',fontSize:'35px',borderRadius:'50%',padding:'5px',color:'#983737'}} />
            </Link>
          </li>
          
          <li className="nav-item  "  style={{borderRight: '1px solid #c3c3c3'}}>
            <Link
              className="nav-link no-extra-margin pl-0"
              to="/"
              role="button"
            >
              <img alt='logoTrello' width="80" src="trelloLogo.png" />
            </Link>
          </li>
          <li className="nav-item " >
            <Link
              className="nav-link d-flex justify-content-between align-items-center"
              to="/brackets"
              role="button"
            >
              <i className="fab fa-trello" style={{fontSize:'20px',transform:'rotate(180deg)',border:'none',color:'#C3C3C3'}}></i>
              <span className="hideXs" style={{marginLeft:'4px',fontWeight:'500',color:'black',fontSize:'15px'}}>{" "}Boards</span> 
            </Link>
          </li>
          {/* Navbar Search */}
          <li className="nav-item">
            <Link
              className="nav-link"
              data-widget="navbar-search"
              to="#"
              role="button"
            >
              <i className="fas fa-search" />
            </Link>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input
                    className="form-control form-control-navbar"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button
                      className="btn btn-navbar"
                      type="button"
                      data-widget="navbar-search"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
         
        </ul>

        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
           {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown hideXs">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="fas fa-plus-circle"></i>
            </Link>
           </li>    
           <li className="nav-item dropdown hideXs">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="fas fa-info-circle"></i>
            </Link>
           </li>    
           <li className="nav-item dropdown">
            <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="fas fa-bell"></i>
            </Link>
           </li> 

           <li className="nav-item dropdown">
            <Link className="nav-link d-flex align-items-center" to="#" >
            <img onClick={()=>setToggle(!toggle)} alt='userAvatar' src="http://s.gravatar.com/avatar/fe2fd4c489e52f7c243cbf4242203d53?s=80&amp;r=g&amp;s=60" style={{borderRadius:'50%',width:"35px",marginTop:'0'}}/>
            <div className="logB" style={toggle ? {marginRight:'-32px'}:{marginRight:"-95px"}}>
            <i class="fas fa-power-off" onClick={()=>logout(history)}>Logout</i>
            </div>
            </Link>
           </li>   
        </ul>
      </nav>
      {/* /.navbar */}

      <style jsx>

        {`

        .logB{
          transition: all 0.5s ease 0s;
    margin-left: 18px;
    overflow: hidden;
    background-color: rgb(231, 49, 36);
    color: white;
    border-radius: 30% 0% 0% 30%;
    padding: 5px;
        }
      
      @media only screen and (max-width: 600px){
         .hideXs{
          display:none !important;
      }
      }
     
      .no-extra-margin{
        padding: 0;
        margin: 0;
        display: grid;
        place-content: center;
      }
        `}
      </style>
    </>
  )
}