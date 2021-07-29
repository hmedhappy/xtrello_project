import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { logout as Logout } from '../utils/Logout';
import ChatPanel from "./ChatPanel"

export default function SideBar()
{

    const history = useHistory();
    const [user,] = useState(JSON.parse(localStorage.getItem('auth')))


    const logout = () =>
    {
        Logout(history)
    }
    return (
        <div>
            {
                <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ backgroundColor: "#1E1E2D", borderRadius: '0px 15px 15px 0px', height: '107vh' }}>
                    <Link to="#" className="brand-link" data-widget="pushmenu">
                        <div className="nav-item has-treeview d-flex justify-content-evenly align-items-center " style={{ justifyContent: 'space-between', padding: "0px 10px" }}>
                            <div className="d-flex justify-content-evenly align-items-center">
                                <img alt="logo" src='trelloLogo.png' width='85' style={{ borderRadius: "10px" }} />
                                <h4 style={{ color: "white", fontFamily: 'system-ui', marginLeft: '5px' }} >Chat</h4>
                            </div>
                            <i className="fas fa-times-circle"></i>
                        </div>
                    </Link>
                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <ul className="nav nav-pills nav-sidebar flex-column" style={{ width: '100%' }} data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item has-treeview">
                                    <Link to="#" className="nav-link">
                                        <img src={"https://gravatar.com/avatar/76a79ca27bbe07f95bb798168c6e7e1e?s=400&d=mp&r=x"} className="img-circle elevation-2" alt="UserImage" />
                                        <span className="brand-text font-weight-light" style={{ marginLeft: '3%', fontSize: '18px' }}>
                                            {user?.username}
                                        </span>
                                        <i onClick={() => logout()} className="right fas fa-sign-out-alt" style={{ float: 'right', marginTop: '2%', fontSize: '20px', color: '#fa4c07' }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <ChatPanel />

                    </div>
                </aside>
            }

            <style jsx>
                {`
                .xchat {
                    justify-content: center;
                    align-items: center;
                }
                .x-chat-input{
                    color: white;
                    padding: 11px;
                    flex: 1;
                    outline: none;
                    border: none;
                    margin: 0px 0px;
                    padding-right: 40px;
                    background: #ffffff00;
                    border-bottom: 1px solid #4f5962;
                }
                .chat-messages{
                    border-bottom: 0.5px solid #4f5962;
                    height: 65vh;
                    margin: 0px 0px 5px 0px;
                    overflow-y: scroll;
                }

                .chat-messages::-webkit-scrollbar {
                    display: none;
                  }
        
                `}
            </style>
        </div>
    )
}