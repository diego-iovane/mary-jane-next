import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import {
    Section,
    Inner,
    MapContainer,
    DetailsContainer,
    Map,
} from './Elements'

const Location = () => {

    const location = { lat: 52.51992, lng: 13.40531}

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC_3CAWukuh2eb3KeN7GWl9nr_9k7MyuTs"
    })

    return (
        <Section>
            <Inner>
                <MapContainer>
                    <Map>
                        {
                            isLoaded ?
                                <GoogleMap
                                    zoom={12}
                                    center={location}
                                    mapTypeId={google.maps.MapTypeId.ROADMAP}
                                    mapContainerStyle={{ width: '800px', height: '800px' }}
                                >
                                    <MarkerF position={location} />
                                </GoogleMap> : null
                       }
                    </Map>
                </MapContainer>
                <DetailsContainer>

                </DetailsContainer>
            </Inner>
        </Section>
    )
}

export default Location