/**
 * component rendering a hls video with vimond replay and shakaplayer 
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Replay } from 'vimond-replay';
import 'vimond-replay/index.css';
import muxjs from 'mux.js'
import ShakaVideoStreamer from 'vimond-replay/video-streamer/shaka-player';
import { getMedia } from '../../actions/media'
import Error from '../Error/Error'

class VideoPlayerContainer extends Component {
    id = parseInt(this.props.match.params.id)
    type = this.props.match.params.type
    componentDidMount() {
		window.muxjs = muxjs //this is needed to use mux.js for with shaka player
		this.props.getMedia(this.type, this.id)
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
            <div className='container'>
				{this.props.mediaItem && 
                <h1>{this.props.mediaItem.title}</h1>}
                
                {this.props.error &&
                    <Error error={this.props.error} />
                }
                <Replay
                    source={{
                        streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
                        contentType: 'application/x-mpegurl',
                    }}
                >
                    <ShakaVideoStreamer />
                </Replay>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { mediaItem, error } = state.media
    return {
        mediaItem, error
    }
}
export default connect(mapStateToProps, {getMedia})(VideoPlayerContainer)
