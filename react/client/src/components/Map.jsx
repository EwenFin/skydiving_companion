import React from 'react'
import ReactDOM from 'react-dom'


class GMap extends React.Component {

  constructor(props){
    super(props)
    this.state = { zoom: 6 };
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
    this.marker = this.createMarker()
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

  createMarker(position) {
    return new google.maps.Marker({
      position: position,
      map: this.map
    })
  }

  createInfoWindow() {
    let contentString = "<div class='InfoWindow'>I'm a Window that contains Info Yay</div>"
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: this.marker,
      content: contentString
    })
  }
}

var initialCenter = { lng: -3.2 , lat: 55.9717272 }

ReactDOM.render(<GMap initialCenter={initialCenter} />, document.getElementById('container'));

// export default Gmap