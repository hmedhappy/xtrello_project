import React, { useEffect, useState } from 'react'
import  randomstring  from "randomstring";

export default function SingleMessage({message:{content,username:current}={}}) {
    const [user, ] = useState(JSON.parse(localStorage.getItem('auth')))
    const [hash, sethash] = useState(randomstring.generate(7))
    useEffect(() => {
        sethash(randomstring.generate(7)) ;
    }, [])
    return (
        <>
            <div className="single-messagee" style={current===user.username ? {flexDirection:'row-reverse',borderRadius:'35px 30px 0px 30px'}:{borderRadius: '35px 30px 35px 0px'}} >
                <img alt="mes" width="35" src={`https://i.pravatar.cc/150?u=${hash}`} style={{borderRadius:"50%",margin:"5px"}}/>
                <p  style={current===user.username ? {backgroundColor: '#9e9ecca1'}:{}} >{content}</p>
            </div>

            <style jsx>{`
            .single-messagee{
                background-color: rgb(158 158 204 / 0%);
                border-radius: 10px;
                padding: 0px;
                margin: 0px;
                width: 85%;
                display: flex;
                justify-content: end;
                align-items: end;

            }
            .single-messagee > p {
                color: white;
                background-color: rgba(158, 158, 204, 0.63);
                flex-direction: row-reverse;
                border-radius: 35px 30px 30px 30px;
                padding: 16px;
                word-break: break-word;
                color:white;
            }
            
            `}</style>
        </>
    )
}
