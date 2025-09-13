const addressLat = 10;
const addressLong = 10;
const positionLat = 0;
const positionLong = 0;

const result = Math.sqrt((addressLong - positionLong)**2 + (addressLat - positionLat)**2);

console.log(result);