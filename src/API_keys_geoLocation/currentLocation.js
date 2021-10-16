const successCallback = (position) => {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
}

const errorCallback = (error) => {
    if (error.id === 1)

        console.log(error.message);

}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}