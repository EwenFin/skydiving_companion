import React from 'react'
import ReactDOM from 'react-dom'


class GMap extends React.Component {

  constructor(props){
    super(props)
    this.state = { zoom: 5 };
  }
  

  // static propTypes() {
  //   initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
  // }

  render() {

    return (
      <div className="GMap">
      <div className='GMap-canvas' ref="mapCanvas">
      </div>
    </div>
    )
  }

  componentDidMount() {
    this.map = this.createMap()
    this.marker = this.createMarker({lat:52.89145, lng:-0.908689}, 'B P S Skydive Langar \n 01949 860878 \n www.skydivelangar.co.uk' )
  }

  
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  createMap() {
    let mapOptions = {
      zoom: this.state.zoom,
      center: this.mapCenter()
    }
    return new google.maps.Map(this.refs.mapCanvas, mapOptions)
  }

  mapCenter() {
    return new google.maps.LatLng(
      this.props.initialCenter.lat,
      this.props.initialCenter.lng
    )
  }

  createMarker(position, info) {
    let marker = new google.maps.Marker({
      position: position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: 'bpaMapLogo.png',
      clickable: true

    })
    let infoWindow = this.createInfoWindow(info, marker)
      infoWindow.close()
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.open(this.getMap(), this);
    });
    
    
    return marker 
  }

  // function add_marker(racer_id, point, note) {
  //     var marker = new google.maps.Marker({map: map, position: point, clickable: true});
  //     marker.note = note;
  //     google.maps.event.addListener(marker, 'click', function() {
  //         info_window.content = this.note;
  //         info_window.open(this.getMap(), this);
  //     });
  //     return marker;
  // }



  createInfoWindow(info, marker) {
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: marker,
      content: info
    })
  }
}

var initialCenter = { lng: -3.2 , lat: 55.9717272 }

ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));

// export default Gmap