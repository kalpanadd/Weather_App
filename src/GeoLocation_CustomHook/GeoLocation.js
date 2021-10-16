import React, { useState, useEffect } from 'react'

const GeoLocation = () => {
    const [coordinates, setCoordinates] = useState({

        loaded: false,
        coordinates: { lat: "", lng: "" }
    });

    const onSuccess = (position) => {
        setCoordinates({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
    };

    const onError = (error) => {
        setCoordinates({
            loaded: true,
            error,

        })
    }
    useEffect(() => {
        if (!navigator.geolocation) {
            onError({
                code: 0,
                message: "Geolocation is not supported",
            })
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [])

    return coordinates;


}

export default GeoLocation
