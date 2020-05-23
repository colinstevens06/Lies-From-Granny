import React, { useEffect, useState } from 'react'

import songs from './songs.json'
import SongCard from './SongCard'

export default function SongsContainer() {

  const [songSort, setSongSort] = useState(null)

  useEffect(() => {
    let alphaOrder = sortByName(songs)
    setSongSort(alphaOrder)
  }, [])

  const sortByName = (input) => {
    // verifying input has value
    if (input) {
      let newInput = [...input];

      // alphabatize by band name
      return newInput.sort(function (a, b) {
        if (b.bandName.toLowerCase() < a.bandName.toLowerCase()) {
          return 1
        } else if (a.bandName.toLowerCase() < b.bandName.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })

    }
  }

  return (
    <div className="songs-container">
      {songSort &&
        songSort.map(song => (
          <SongCard
            key={song.id}
            bandName={song.bandName}
            songs={song.songs}
          />
        ))

      }
    </div>
  )
}
