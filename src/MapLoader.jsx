import React, { useEffect, useRef } from 'react'
import { withScriptjs } from 'react-google-maps'
import CircularProgress from '@material-ui/core/CircularProgress'

import EnhancedMap from './EnhancedMap'
//import { compose, withProps } from 'recompose'


const getGMapsAPIURL = selectedLanguage => {
  const hostname = 'maps.googleapis.com'
  const pathname = '/maps/api/js'
  const query = {
    v: 'quarterly',
    key: 'AIzaSyBp-xwKAGDr6hROd_nPQAbB2CngUrdwqI0',
    libraries: 'drawing',
    language: selectedLanguage
  }
  const ending = Object.keys(query).reduce((ret, k, i) => {
    const v = query[k]
    return ret + (i !== 0 ? '&' : '') + k + '=' + v
  }, '?')
  // 'https://maps.googleapis.com/maps/api/js?v=3.26&libraries=geometry,drawing,places&key=AIzaSyBVKhISdQ_5x6c26LkcrogEg-7jt0w4Zk8&language=selectedLanguage'
  // We could return the URL directly, but I kept this way
  // (1) to make it look like former r-g-m v4's ScriptjsLoader component and
  // (2) to stress the different fragments of the URL
  console.log('https://' + hostname + pathname + ending)
  return 'https://' + hostname + pathname + ending
}

const AsyncGMap = withScriptjs(EnhancedMap)

const MapLoader = props => {
  const AsyncGMapRef = useRef(null)
  useEffect(() => {
    console.log('Maploader on Mount');
  });
  return(
  <AsyncGMap
    ref={AsyncGMapRef}
    googleMapURL={getGMapsAPIURL(props.selectedLanguage)}
    loadingElement={<CircularProgress />}
    containerElement={<div style={{ height: '100%', width: '100%' }} />}
    {...props}
  />
  )
}

const WrappedMapLoader = ({
  style = {
    height: '100%',
    width: '100%',
    minHeight: '150px',
    minWidth: '150px'
  },
  ...other
} = {}) =>  (
  <MapLoader mapElement={<div style={style} />} {...other}>
  </MapLoader>
)

export default WrappedMapLoader
