import React from 'react';

import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className='btn btn-success btn-lg' onClick={this.removeTrack}>Cancel</button>
    }
    return <button className='btn btn-success btn-lg' onClick={this.addTrack}>Select</button>;
  }

  render() {
    return (
      <div  className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
        <div className='card p-0 overflow-hidden h-100 shadow'>
          <img src={this.props.track.album.image} className='card-img-top' alt='' />
            <div className='card-body'>
              <h3 className='card-tittle'>{this.props.track.name}</h3>
              <p className='card-text' >{this.props.track.artist} | {this.props.track.album}</p>
          </div>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;


// WEBPACK FOOTER //
// ./src/components/Track/Track.js