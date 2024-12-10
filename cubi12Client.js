import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const cubi12Client = axios.create({
  baseURL: process.env.CUBI12_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default cubi12Client;
