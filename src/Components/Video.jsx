import React from 'react';
import './Video.css';

function Video() {
  return (
    <div className='video'>
        <video className='video_player' src="https://www.youtube.com/watch?v=GePLvNgWROg&list=PL-J2q3Ga50oMQa1JdSJxYoZELwOJAXExP&index=14" type="video/mp4"></video>
    </div>
  )
}

export default Video
