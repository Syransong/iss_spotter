// Test Code for fetchMyIP
// const {fetchMyIP } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! returned IP:', ip);
// });

//Test Code for fetchCoordsByIP
// const { fetchCoordsByIP } = require('./iss');

// fetchCoordsByIP('173.183.74.216', (error, data) => {
//   if (error) {
//     console.log("Whoops, it didn't work!", error);
//     return;
//   }
//   console.log("Woohoo! Here are your coordinates:", data);
// });

//Test code for fetchISSFlyOverTimes
const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = {latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, data) => {
  if (error) {
    console.log("Whoops, it didn't work!", error);
    return;
  }
  console.log("Woohoo! Here are your flyover times:", data);
})