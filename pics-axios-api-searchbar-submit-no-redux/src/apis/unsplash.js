import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: { 'Authorization': 'Client-ID _BEVOd-dcw144AsLLpSMM6bN_baFykfq7DjpQpaZqu8' }
});

export default unsplash;