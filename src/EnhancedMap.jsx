import React from 'react'

import { withGoogleMap, GoogleMap } from 'react-google-maps'

// Hide Points-of-interest and stations to avoid confussion with custom markers
// https://developers.google.com/maps/documentation/javascript/style-reference
const defaultStyles = [
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'transit',
    stylers: [{ visibility: 'off' }]
  }
]

const gmapsOptions = {
  keyboardShortcuts: false,
  mapTypeControl: false,
  streetViewControl: false,
  minZoom: 2,
  maxZoom: 18,
  styles: defaultStyles
}

const toCoords = (defaultCenter, center) => {
  const coords = {}

  if (defaultCenter) {
    coords.defaultCenter = {
      lat: defaultCenter.latitude,
      lng: defaultCenter.longitude
    }
  }

  if (center) {
    coords.center = {
      lat: center.latitude,
      lng: center.longitude
    }
  }

  return coords
}

const EnhancedMap = ({
  children,
  //images,
  defaultCenter = { latitude: 0, longitude: 0 },
  center,
  //onZoomChanged,
  //onCenterChanged,
  ...other
}) => {

  return (
    <GoogleMap
     options={gmapsOptions}
      {...toCoords(defaultCenter, center)}
      {...other}
    >
    </GoogleMap>
  )
}

EnhancedMap.defaultProps = {
  zoom: 4
}

export default withGoogleMap(EnhancedMap)