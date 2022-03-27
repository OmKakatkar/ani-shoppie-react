import axios from 'axios';

const getProducts = async () => await axios.get('/api/products');

export { getProducts };
