import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import 'vimond-replay/index.css';
import CompoundVideoStreamer from 'vimond-replay/video-streamer/compound';
// import Loader from '../Loader/Loader'
// import VideoPlayer from './VideoPlayer';

//import playlist from './playlist.m3u8'


class VideoPlayerContainer extends Component {

    id = parseInt(this.props.match.params.id)
    type = this.props.match.params.type
    componentDidMount() {

    }
   replayOptions = {
        videoStreamer: {
          hlsjs: {
            customConfiguration: {
              capLevelToPlayerSize: true,
              maxBufferLength: 45
            }
          },
          shaka: {
            customConfiguration: {
              streaming: {
                bufferingGoal: 120
              }
            }
          }
        }
      };
      
    render() {
        return (
           <div>
                <Replay
  source={{
    streamUrl: './playlist.m3u8',
    contentType: 'application/x-mpegurl',
  }}
  initialPlaybackProps={{ isPaused: true }}
>
  <CompoundVideoStreamer />
</Replay>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(VideoPlayerContainer)