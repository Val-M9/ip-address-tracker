import axios from 'axios';
import { BASE_URL } from '../common/constants/base-url';

const apiCall = {
  async getIpAddress(ipAddress) {
    try {
      const clientIp = await this.getClientIp();
      console.log(clientIp);
      const response = await axios.get(`${BASE_URL}&ipAddress=${ipAddress || clientIp}`);
      return response;
    } catch (error) {
      if (error.response) {
        console.log("Response error:", error.response.data);
        console.log("Response error:", error.response.status);
        console.log("Response error:", error.response.headers);
      } else if (error.request) {
        console.log("Request error:", error.request);
      } else {
        console.log(error.message);
      }
    }
  },

  async getClientIp() {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      return response.data.ip;
    } catch (error) {
      console.error(error);
    }
  }
};

export { apiCall };
