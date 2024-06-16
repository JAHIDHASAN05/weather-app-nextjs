export const locationData = [
  {
    city: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
  },
  {
    city: "Chittagong",
    latitude: 22.3569,
    longitude: 91.7832,
  },
  {
    city: "Khulna",
    latitude: 22.8456,
    longitude: 89.5403,
  },
  {
    city: "Sylhet",
    latitude: 24.8949,
    longitude: 91.8687,
  },
  {
    city: "Rajshahi",
    latitude: 24.3745,
    longitude: 88.6042,
  },
  {
    city: "New Delhi",
    latitude: 28.6139,
    longitude: 77.209,
  },
  {
    city: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    city: "Kolkata",
    latitude: 22.5726,
    longitude: 88.3639,
  },
  {
    city: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    city: "Chennai",
    latitude: 13.0827,
    longitude: 80.2707,
  },

  {
    city: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    city: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    city: "Chicago",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    city: "Houston",
    latitude: 29.7604,
    longitude: -95.3698,
  },
  {
    city: "Phoenix",
    latitude: 33.4484,
    longitude: -112.074,
  },
];

function getLocationAllData() {
  return locationData;
}

 function getLocationByName(cityName) {
  if (!cityName) {
    return null;
  }
  const result = locationData.find(
    (location) =>
      location.city.toLocaleLowerCase() === cityName.toLocaleLowerCase()
  );
 

  return result || {}
}


export {getLocationAllData, getLocationByName}