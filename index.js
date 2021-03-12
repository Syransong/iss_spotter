// const {fetchMyIP } = require('./iss');
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! returned IP:', ip);
// });

const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('173.183.74.216', (error, data) => {
  if (error) {
    console.log("Whoops, it didn't work!", error);
    return;
  }
  console.log("Woohoo! Here are your coordinates:", data);
});
