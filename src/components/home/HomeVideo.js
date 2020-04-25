import React from 'react'

export default function HomeVideo() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 style={{ textAlign: "center", fontSize: 55 }} className="my-4">Videos</h2>
          <div className="home-video-container">
            <iframe src="https://www.youtube.com/embed/Hd506hPzick" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video" className="video"></iframe>

          </div>

        </div>
      </div>
    </div>
  )
}
