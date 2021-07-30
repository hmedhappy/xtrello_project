import React, { useState } from 'react';
import CardAvatar from '../Brackets/CardAvatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { Collapse } from '@material-ui/core';

export default function TextTask({data}) {
  const [ramdom] = useState(Math.floor(Math.random() * 6));
  const [toggle, settoggle] = useState(false)
  const colorllist = ['#F4F4F4', '#EBFDF5', '#F8E8E83b','#476C5D3b','#87824D3b','#626C853b'];
  var colors = [
    '#4339F2',
    '#FF3838',
    '#891BE8',
    '#1AD698',
    '#F8BD1C',
  ];
  function pickColor() {
    const color =
      colors[Math.floor(Math.random() * colors.length - 1)];
    colors = colors?.filter((e) => e !== color);
    return color;
  }
  return (
    <>
      <div
        className={`carddd ${toggle ? "upp" :""}`}
        style={{
          backgroundColor: `${
            colorllist[Math.floor(Math.random() * 6)]
          }`,
        }}>
        <div className='card-headerr'>
        <div className='stats d-flex'>
            {[
              ...new Array(
                Math.floor(
                  Math.random() * (colors?.length - 1)
                )
              ),
            ].map((e,index) => (
              <div key={index} className='stat-card' style={{backgroundColor: `${pickColor()}`}}></div>
            ))}
          </div>
        </div>
        <div className='card-bodyy' onClick={()=>settoggle(!toggle)}>
         <Collapse in={toggle} style={{minHeight:'90px',visibility:'visible'}}>
         <p>
            <b>{data?.title}</b>  
          </p>
          <h6 style={{ minHeight: '62px' }}>
            {data?.contenu || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius"}
          </h6>
         </Collapse>
        </div>
        <div className='card-footerr d-flex justify-content-between align-items-center'>
          <div>
            <AvatarGroup max={4} spacing={'small'}>
              {[...new Array(ramdom)].map((e,index) => (
                <CardAvatar key={index} />
              ))}
            </AvatarGroup>
          </div>
          <div>
            <h6>
              {ramdom} <i className='far fa-eye'></i>
            </h6>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .upp{
          height: fit-content;
          position:relative;
          z-index:45345345 !important;
        }
        `}
      </style>
    </>
  );
}
