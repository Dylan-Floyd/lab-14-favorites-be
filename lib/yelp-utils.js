const request = require('superagent');
const YELP_URL = 'https://api.yelp.com/v3/businesses';

async function searchBusinesses(searchString, locationString) {
  const response = await request
    .get(`${YELP_URL}/search?term=${searchString}&location=${locationString}`)
    .set('Authorization', 'Bearer ' + process.env.YELP_KEY);
  return response.body.businesses;
}

async function getBusinessById(id) {
  const response = await request
    .get(`${YELP_URL}/${id}`)
    .set('Authorization', 'Bearer ' + process.env.YELP_KEY);
  return response.body;
}

module.exports = {
  searchBusinesses,
  getBusinessById
};