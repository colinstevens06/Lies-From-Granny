import React from 'react'

const ListItem = ({ value }) => (
  <li>{value}</li>
);

const List = ({ items }) => (
  <ul>
    {
      items.map((item, i) => <ListItem key={i} value={item} />)
    }
  </ul>
);

export default function SongCard(props) {
  return (
    <div className="band-card">
      <h2>{props.bandName}</h2>
      <List items={props.songs} />
    </div>
  )
}
