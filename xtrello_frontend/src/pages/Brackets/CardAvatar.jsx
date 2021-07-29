import React, { useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import  randomstring  from "randomstring";



export default function CardAvatar() {
    const [hash, sethash] = useState(randomstring.generate(7))
    useEffect(() => {
        sethash(randomstring.generate(7))
    }, [])
    return (
        
        <>
          <Avatar
                    alt='Remy Sharp'
                    src={`https://i.pravatar.cc/150?u=${hash}`}
                  />   
        </>
    )
}
