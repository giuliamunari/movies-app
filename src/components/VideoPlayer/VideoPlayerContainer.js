import React, { Component } from 'react'
import 'mux'
import muxjs from 'mux.js'
import { connect } from 'react-redux'
import { CaptionParser } from 'mux.js/lib/mp4';
//import "hls.js"

import shaka from 'shaka-player'

export default class VideoPlayerContainer extends Component {
	constructor(props) {
		super(props);
		this.videoPlayer = React.createRef();
	  }
	id = parseInt(this.props.match.params.id)
	type = this.props.match.params.type
	manifestUri = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
	componentDidMount() {

		
		// Install built-in polyfills to patch browser incompatibilities.
		shaka.polyfill.installAll();
		// Check to see if the browser supports the basic APIs Shaka needs.
		if (shaka.Player.isBrowserSupported()) {
			
			this.initPlayer();
		} else {
			// This browser does not have the minimum set of APIs we need.
			console.error('Browser not supported!');
		}
	}

	initPlayer() {
		window.muxjs = muxjs;
		var player = new shaka.Player(this.videoPlayer.current);
		// Listen for error events.
		player.addEventListener('error', this.onErrorEvent);

		// Try to load a manifest.
		
		try {
			player.load(this.manifestUri)
		}
		catch (error) {
			this.onError(error)
		}
		// player.load(this.manifestUri).then(function () {
		// 	// This runs if the asynchronous load is successful.
		// 	console.log('The video has now been loaded!');
		// }).catch(this.onError);  // onError is executed if the asynchronous load fails.
	}

	onErrorEvent(event) {
		// Extract the shaka.util.Error object from the event.
		this.onError(event.detail);
	}

	onError(error) {
		// Log the error.
		console.error('Error code', error.code, 'object', error);
	}

	componentWillUnmount() {
		// unmount stuff
		// kill stream hogging...:)
	}

	render() {
		return (

			<div>
				<h2>Player</h2>
				<video ref={this.videoPlayer}
					width="640"
					poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
					controls autoPlay>
				</video>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {

	}
}

//export default connect(mapStateToProps)(VideoPlayerContainer)