import React, { useState } from 'react';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import CardAvatar from './CardAvatar';
import { capitalCase } from 'change-case';

export default function TaskCard({ img = true, data }) {
  const [ramdom] = useState(
    Math.floor(Math.random() * 4 + 1)
  );
  const [ramdomPhotos] = useState(
    Math.floor(Math.random() * 50 + 1)
  );
  const [toggle, settoggle] = useState(false);
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
    colors = colors.filter((e) => e !== color);
    return color;
  }
  return (
    <>
      <li
        className={`${toggle ? 'ss container' : ''}`} onClick={() => settoggle(!toggle)}>
        <div className='card-headerr'>
          {Math.random() > 0.6 && img ? (
            <img
              alt='ramm'
              src={`https://picsum.photos/200/300?random=${ramdomPhotos}`}
              style={{
                margin: '3px',
                width: '264px',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
          ) : null}
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
          {data?.status === 'loading' ? (
            <i className='fas fa-spinner' style={{ position: 'relative',left: '21rem'}}></i>
          ) : (
            <i
              className='far fa-check-circle'
              data-toggle='tooltip'
              data-placement='right'
              title={data?.status}
              style={{
                color: 'green',
                position: 'relative',
                left: '21rem',
              }}></i>
          )}
        </div>
        <div className='card-bodyy'>
          <p>
            <b>{capitalCase(data?.title)}</b>
          </p>
          <h6 style={{ minHeight: '40px' }}>
            {data?.contenu || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius"}
          </h6>
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
      </li>
    </>
  );
}
