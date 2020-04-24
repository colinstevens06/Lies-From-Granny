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

export default function ShowCard(props) {

  return (
    <div className="show-card">

      <div className="row">
        <div className="col-md-6 gig-image">
          <img src={props.showImg}
            alt={props.showImgAlt} className="show-img img-fluid" />
        </div>

        <div className="col-md-6">
          <div className="gig-title">{props.showName}</div>
          <div className="gig-deets">{props.showDate}</div>
          <div className="gig-text">{props.showText}</div>
          <div className="gig-text">New songs included:</div>
          {props.songs &&
            <List items={props.songs} />
          }


        </div>

      </div>


    </div>
  )
}
