import React from 'react'
import ReactDOM from 'react-dom'


class GMap extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      zoom: 5,
      center: { lng: -3.2 , lat: 53.9717272 }
   };
  }
  

  render() {

    return (

      <div className="GMap">
      <button onClick = {this.populateDropZones.bind(this)}>Show All DZs</button>
      <button onClick = {this.geoLocate.bind(this)}>Find Me!</button>
      <div className='GMap-canvas' ref="mapCanvas">{this.map}
      </div>
    </div>
    )
  }

  populateDropZones(){
    this.createMarker({lat:52.89145, lng:-0.908689}, '<p>B P S Skydive Langar </p>' + '<p>01949 860878<p>' + '<p><a href = http://www.skydivelangar.co.uk/> www.skydivelangar.co.uk</p>' )
    
    this.createMarker({lat:53.969601, lng:-2.83858}, '<p>Black Knights</p>'+
                '<p>tel: 01524 791820</p>'+
                '<p><a href="http://www.bkpc.co.uk">http://www.bkpc.co.uk</a></p>')

    this.createMarker({lat:54.119925, lng:-0.243241}, '<p> Bridlington</p>'+
            '<p>tel: 01262 228033</p>'+
            '<p><a href="http://www.skydivegb.com">http://www.skydivegb.com</a></p>')

    this.createMarker({lat:54.168191, lng:-2.969986}, '<p>Cark</p>'+
            '<p>tel: 01539 558672</p>'+
            '<p><a href="http://www.skydivenorthwest.co.uk">http://www.skydivenorthwest.co.uk</a></p>')

    this.createMarker({lat:52.48571,  lng:0.09063}, '<p>Chatteris</p>'+
            '<p>tel: 0871 664 0113</p>'+
            '<p><a href="http://www.ukskydiving.com">http://www.ukskydiving.com</a></p>')

    this.createMarker({lat:50.327434, lng:-5.176355}, '<p>Cornish</p>'+
            '<p>tel: 07790 439 653</p>'+
            '<p><a href="http://www.cornishparachuteclub.co.uk">http://www.cornishparachuteclub.co.uk</a></p>')

    this.createMarker({lat:50.864491, lng:-3.227008},
    '<p>Dunkeswell</p>'+
                '<p>tel: 01404 890222 or 07718 638000</p>'+
                '<p><a href="http://www.skydiveukltd.com">http://www.skydiveukltd.com</a></p>')

    this.createMarker({lat:51.100059, lng:-1.785827},'<p>GoSkydive</p>'+
            '<p>tel: 01722 568969</p>'+
            '<p><a href="http://www.goskydive.com">http://www.goskydive.com</a></p>')

    this.createMarker({lat:51.154153, lng:0.644834},'<p>Headcorn</p>'+
            '<p>tel: 01622 891670</p>'+
            '<p><a href="http://www.headcorn.com">http://www.headcorn.com</a></p>')

    this.createMarker({lat:53.498581, lng:-0.525858}, '<p>Hibaldstow</p>'+
            '<p>tel: 0113 250 5600</p>'+
            '<p><a href="http://www.skydiving.co.uk">http://www.skydiving.co.uk</a></p>'+
            '</div>')

    this.createMarker({lat:52.030455, lng:-1.211664}, '<p>Hinton</p>'+
            '<p>tel: 01295 812300</p>'+
            '<p><a href="http://www.skydive.co.uk">http://www.skydive.co.uk</a></p>')

    this.createMarker({lat:49.2032427441791, lng:-2.1917724609375},'<p>Jersey</p>'+
            '<p>tel: 01534 747410</p>'+
            '<p><a href="http://www.skydivejersey.net">http://www.skydivejersey.net</a></p>')

    this.createMarker({lat:51.250454, lng:-1.764469}, '<p>Netheravon</p>'+
            '<p>tel: 01980 628250</p>'+
            '<p><a href="http://www.netheravon.com">http://www.netheravon.com</a></p>')

    this.createMarker({lat:56.411416, lng:-3.186389}, '<p>Paragon</p>'+
            '<p>tel: 01821 642454</p>'+
            '<p><a href="http://www.paragonskydiving.co.uk">http://www.paragonskydiving.co.uk</a></p>')

    this.createMarker({lat:54.764627, lng:-1.387712}, '<p>Peterlee</p>'+
            '<p>tel: 0191 517 1234</p>'+
            '<p><a href="http://www.skydiveacademy.org.uk">http://www.skydiveacademy.org.uk</a></p>')

    this.createMarker({lat: 51.552732, lng:-1.102427}, '<p>Reading</p>'+
            '<p>tel: 0845 130 7194</p>'+
            '<p><a href="http://www.londonparachuteschool.com">http://www.londonparachuteschool.com</a></p>')

    this.createMarker({lat:50.653029, lng:-1.182514}, '<p>Skydive Isle of Wight</p>'+
            '<p>tel: 01932 701321 or 07976 262833</p>'+
            '<p><a href="http://www.skydiveiow.co.uk">http://www.skydiveiow.co.uk</a></p>')

    this.createMarker({lat:56.185237, lng:-3.21684}, '<p>St Andrews</p>'+
            '<p>tel: 01592 882 400</p>'+
            '<p><a href="http://www.skydivestandrews.co.uk">http://www.skydivestandrews.co.uk</a></p>')

    this.createMarker({lat:56.325872, lng:-3.75083}, '<p>Strathallan</p>'+
            '<p>tel: 07774 686161</p>'+
            '<p><a href="http://www.skydivestrathallan.co.uk">http://www.skydivestrathallan.co.uk</a></p>')

    this.createMarker({lat:51.602583, lng:-4.067834},'<p class="markerName">Swansea</p>'+
            '<p>tel: 07779 019655</p>'+
            '<p><a href="http://skydiveswansea.co.uk">http://skydiveswansea.co.uk</a></p>')

    this.createMarker({lat:51.562336, lng:-1.714392}, '<p>Swindon</p>'+
            '<p>tel: 01793 791222</p>'+
            '<p><a href="http://www.skydivelondon.co.uk">http://www.skydivelondon.co.uk</a></p>')

    this.createMarker({lat:52.92303, lng:-2.647395},'<p>Tilstock</p>'+
            '<p>tel: 01948 841111</p>'+
            '<p><a href="http://www.skydivetilstock.co.uk">http://www.skydivetilstock.co.uk</a></p>')

    this.createMarker({lat:52.43588, lng:1.60366}, '<p>UK Para Beccles</p>'+
            '<p>tel: 01502 476131</p>'+
            '<p><a href="http://www.ukparachuting.co.uk">http://www.ukparachuting.co.uk</a></p>')

    this.createMarker({lat:52.555333, lng:-0.389528},'<p>UK Para Sibson</p>'+
            '<p>tel: 01832 280490</p>'+
            '<p><a href="http://www.skydivesibson.co.uk">http://www.skydivesibson.co.uk</a></p>'+
            '</div>')

    this.createMarker({lat:51.878818, lng:-1.230065}, '<p>Weston - RAF 22 Training Group </p>'+
            '<p>tel: availability to be confirmed</p>'
            )

    this.createMarker({lat:54.986566, lng:-6.644929}, '<p>Wild Geese</p>'+
            '<p>tel: 028 2955 8609</p>'+
            '<p><a href="http://www.wildgeeseskydive.com">http://www.wildgeeseskydive.com</a></p>')



  }


  componentDidMount() {
    this.map = this.createMap()
    
  }

  
  componentDidUnMount() {
    google.maps.event.clearListeners(map, 'zoom_changed')
  }

  geoLocate(){
    console.log("find clicked")
    navigator.geolocation.getCurrentPosition(function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      const infoWindow = new google.maps.InfoWindow()
      infoWindow.setPosition(pos)
      infoWindow.setContent('Your Location')
      infoWindow.open(this.map)
      this.map.setCenter(pos)
      this.map.setZoom(9)
    }.bind(this), function () {
        this.handleLocationError(true, infoWindow, this.map.getCenter())
      })
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
      this.state.center.lat,
      this.state.center.lng
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

  createInfoWindow(info, marker) {
    return new google.maps.InfoWindow({
      map: this.map,
      anchor: marker,
      content: info
    })
  }
}

export default GMap