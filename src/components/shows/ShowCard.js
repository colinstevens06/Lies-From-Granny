import React from 'react'

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
        </div>

      </div>


    </div>
  )
}
