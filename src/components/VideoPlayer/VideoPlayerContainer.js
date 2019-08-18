import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
//import muxjs from 'mux'
import ShakaVideoStreamer from 'vimond-replay/video-streamer/shaka-player';

class VideoPlayerContainer extends Component {
	
    id = parseInt(this.props.match.params.id)
    //type = this.props.match.params.type
    componentDidMount() {
		//window.muxjs = muxjs
    }
    replayOptions = {
		videoStreamer: {
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
                        streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                        contentType: 'application/x-mpegurl',
					}}
					options={this.replayOptions}>
                >
                     <ShakaVideoStreamer />
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