import React from 'react'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from '../Brackets/CardAvatar'
import TextTask from './TextTask';

export default function NewTasks({list}) {
    return (
        <>
                 <div style={{background:'#fff',padding:'17px 5px 0px 26px',display:'flex',justifyContent: 'space-between'}}>
      <h3 style={{fontWeight:'bolder',color:'black'}}>Process <span>({list?.length})</span></h3>
      <div className="d-flex justify-content-between align-items-center ">
      <AvatarGroup max={4} spacing={'small'}>
                  {[...new Array(Math.floor(Math.random()*30+5))].map(e=><CardAvatar/>)}
      </AvatarGroup>
        <h5 className="m-3" style={{cursor:"pointer"}}><b>Menu</b></h5>
      </div>
    </div>
       <div className={`card-slidee ${list?._id}-process`} onWheel={(e)=>{
         var item = document.querySelector(`.${list?._id}-process`)
         if (e.deltaY > 0) item.scrollLeft += 100;
         else item.scrollLeft -= 100;
       }}  >
      {list?.map(e=><TextTask data={e}/>)}
   </div>

   <style jsx>
     {`
     .card-bodyy{
      flex: 1;
      padding: 20px;
     }

     .card-bodyy > p {
      font-size: 15px;
     }

     
     .card-footerr{
      padding: 10px;

     }
     `}
   </style>
        </>
    )
}
