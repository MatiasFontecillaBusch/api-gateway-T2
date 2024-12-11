import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const accessServiceClient = axios.create({
  baseURL: process.env.ACCESS_SERVICE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default accessServiceClient;
