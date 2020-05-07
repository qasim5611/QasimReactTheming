import React, { Component } from 'react';

import posterimg from './images/UMkumEFksC (1).png';
import { Player } from 'video-react';
class vedio extends Component {
    render() {
        return (
            <div>
                <Player
      playsInline
      poster={posterimg}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      height="300px"
      width="800px"
      volume
      
    />
            </div>
        );
    }
}

export default vedio;