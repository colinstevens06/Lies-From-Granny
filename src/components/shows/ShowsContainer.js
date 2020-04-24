import React from 'react'

import shows from './shows.json'

import ShowCard from './ShowCard'

export default function ShowsContainer() {
  return (
    <div className="shows-container">
      {shows.map(show => (
        <ShowCard
          key={show.id}
          showName={show.showName}
          showDate={show.showDate}
          showText={show.showText}
          showImg={show.showImg}
          showImgAlt={show.showImgAlt}
          songs={show.songs}
        />
      ))}
    </div>
  )
}
