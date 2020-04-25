import React from 'react'

export default function HomeVideo() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="my-4 video-header">Videos</h2>
          <div className="home-video-container">
            <iframe src="https://www.youtube.com/embed/Hd506hPzick" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video" className="video"></iframe>

          </div>

        </div>
      </div>
    </div>
  )
}
