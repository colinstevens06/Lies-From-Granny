import React from 'react'

export default function HomeVideo() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <h2 className="my-4 video-header">Videos</h2>
          <div className="home-video-container mb-4">
            <iframe src="https://www.youtube.com/embed/videoseries?list=PLWWWFDqFWHvR3x_Sf-E3DWfEnRGqmUpG7" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video" className="video"></iframe>
            <h2 className="mt-5 mb-4 video-header">#RONA 2020 Series</h2>

            <iframe src="https://www.youtube.com/embed/videoseries?list=PLWWWFDqFWHvRes-9N0xjfzI-5MI__gB_S" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="video" className="video"></iframe>

          </div>

        </div>
      </div>
    </div>
  )
}
