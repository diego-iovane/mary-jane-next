import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import SmallCtaAlt from '../../buttons/SmallCtaAlt'
import {
    Section,
    Inner,
    MapContainer,
    DetailsContainer,
    Map,
    Title,
    SubTitle,
    Text,
    ButtonContainer,
} from './Elements'

const Location = () => {

    const location = { lat: 52.51992, lng: 13.40531 }

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
                                    mapContainerStyle={{ width: '100%', height: '100%' }}
                                >
                                    <MarkerF position={location} />
                                </GoogleMap> : null
                        }
                    </Map>
                </MapContainer>
                <DetailsContainer>
                    <Title>Location</Title>
                    <SubTitle>
                        Arena Berlin
                        Eichenstr. 4,<br></br> 12435 Berlin
                    </SubTitle>
                    <Text>Parking garage of Allianz Tower:</Text>
                    <Text>Entrance Martin-Hoffmann-Str. 18, 12435 Berlin</Text>
                    <Text>U-Bahn:</Text>
                    <Text>Line U1: U-Bhf Schlesisches Tor + 10min. walk</Text>
                    <Text>S-Bahn:</Text>
                    <Text>Lines S8, S85, S9, S42, S41: S-Bhf Treptower Park + 5min. walk</Text>
                    <Text>Bus:</Text>
                    <Text>Lines 104, 194, 265, N65: Eichenstr./Puschkinallee</Text>
                    <Text>Parking:</Text>
                    <Text>There is free & paid parking in the immediate vicinity.</Text>
                    <ButtonContainer>
                        <SmallCtaAlt>See more</SmallCtaAlt>
                    </ButtonContainer>
                </DetailsContainer>
            </Inner>
        </Section>
    )
}

export default Location