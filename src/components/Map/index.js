import React from 'react';
import {
	GoogleMap,
	Marker,
	withGoogleMap,
	withScriptjs,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props =>
	<GoogleMap
		defaultZoom={6}
		defaultCenter={{ lat: 53.71, lng: 27.32 }}
	>
		{props.markersData && props.markersData.map(({ coord, wind }, i) => (
			<Marker
				key={`marker-${i}`}
				position={{ lat: coord.lat, lng: coord.lon }}
				options={{
					icon: {
						path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
						scale: 6,
						fillColor: 'red',
						fillOpacity: 0.8,
						strokeWeight: 2,
						rotation: wind.deg,
					},
				}}
			/>
		))}
	</GoogleMap>
));

export default Map;
