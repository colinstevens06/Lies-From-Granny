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

const DeetsDiv = ({ value }) => (
  <div className="gig-text">{value}</div>
);

const Deets = ({ items }) => (
  <div>
    {
      items.map((item, i) => <DeetsDiv key={i} value={item} />)
    }
  </div>
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
          {props.showText && <Deets items={props.showText} />}
          {props.songs &&
            <div>
              <div className="gig-text my-3">New songs included:</div>
              <List items={props.songs} />
            </div>
          }


        </div>

      </div>


    </div>
  )
}
