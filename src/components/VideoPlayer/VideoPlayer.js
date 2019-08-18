import React from 'react'

export default function VideoPlayer(props) {
    return (
        <div>
            <video width="400" controls>
                <source src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8​" type="video/m3u8​" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    )
}
