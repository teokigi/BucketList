const baseUrl = 'http://localhost:3000/api/countries';

export default {
  getBucketList() {
    return fetch(baseUrl)
    .then(res => res.json())
  }
}
