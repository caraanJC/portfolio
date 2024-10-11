import { ComposableMap, Geographies, Geography, Annotation } from 'react-simple-maps'

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-130.0, -52.0, 0],
        center: [-10, -40],
        scale: 2500
      }}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <Geographies geography="/features.json" fill="#2c065d" stroke="#FFFFFF" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
      <Annotation
        subject={[121.47748161699562, 14.389529232046632]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: 'round'
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {'Pakil Laguna, Philippines'}
        </text>
      </Annotation>
    </ComposableMap>
  )
}

export default Map
