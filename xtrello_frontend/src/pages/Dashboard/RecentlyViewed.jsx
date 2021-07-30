import React from 'react'
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from '../Brackets/CardAvatar'
import TextTask from './TextTask';


export default function RecentlyViewed({ list })
{
  const scrollFunction = (e) =>
  {
    var item = document.querySelector(`.${ list?._id }-recent`)
    if (e.deltaY > 0) item.scrollLeft += 100;
    else item.scrollLeft -= 100;
  }
  return (
    <>
      <div className='main-Task'>
        <h3 >Recently viewed <span>({list?.length})</span></h3>
        <div className="d-flex justify-content-between align-items-center ">
          {/* Viewers */}
          <AvatarGroup max={4} spacing={'small'}>
            {[...new Array(Math.floor(Math.random() * 30 + 5))].map((e,index) => <CardAvatar key={index} />)}
          </AvatarGroup>
          <h5 className="m-3" style={{ cursor: "pointer" }}><b>Menu</b></h5>
        </div>
      </div>
      {/* Text Content */}
      <div className={`card-slidee ${ list?._id }-recent`} onWheel={(e) => scrollFunction(e)}  >
        {list?.map((e,index) => <TextTask key={index} data={e} />)}
      </div>
    </>
  )
}
