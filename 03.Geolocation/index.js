function curSucess(position) {
  const coords = position.coords;

  console.log(
    `Latitude: ${coords.latitude}, Longitude: ${coords.longitude}, More or less ${coords.accuracy} meters.`
  );
}

function curError(error) {
  console.log(`Error: ${error.code} ${error.message}`);
}

const curOptions = {
  enableHighAccuracy: true, //use gps if available
  timeout: 5000, //time to wait for stop trying
  maximumAge: 0, //do not use a cached position
};

// navigator.geolocation.getCurrentPosition(curSucess, curError, curOptions);

// WATCH POSITION

const target = {
  latitude: 41.40338,
  longitude: -71.12203,
};

function watchSucess(position) {
  const coords = position.coords;
  console.log(coords);

  if (
    target.latitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log('You are in the target area');
    navigator.geolocation.clearWatch(id);
  }
}

function watchError(error) {
  console.log(`Error: ${error.code} ${error.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, //use gps if available
  timeout: 5000, //time to wait for stop trying
  maximumAge: 0, //do not use a cached position
};

const id = navigator.geolocation.getCurrentPosition(
  watchSucess,
  watchError,
  watchOptions
);
