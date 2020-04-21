import React from 'react'

export default function ShowCard(props) {
  return (
    <div className="show-card">

      <div className="row">
        <div className="col-md-6 gig-image">
          <img src="./assets/images/shows/Valentines-8x10-Web-flyer.jpg"
            alt="Lies From Granny at the 8x10 on Valentine's Day" className="show-img img-fluid" />
        </div>

        <div className="col-md-6">
          <div className="gig-title">{props.showTitle}</div>
          <div className="gig-deets">{props.showDate}</div>
          <div className="gig-text">{props.showText}</div>
        </div>

      </div>


    </div>
  )
}
