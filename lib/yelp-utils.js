const request = require('superagent');
const { sign } = require('./auth/jwt');
const YELP_URL = 'https://api.yelp.com/v3/businesses/search';

async function searchBusinesses(searchString, locationString) {
  const response = await request
    .get(YELP_URL + `?term=${searchString}&location=${locationString}`)
    .set('Authorization', 'Bearer ' + process.env.YELP_KEY);
  return response.body.businesses;
}


module.exports = {
  searchBusinesses
};