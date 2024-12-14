import axios from 'axios';

const API_URL = 'https://anu-portfolio-backend-iequx7uxi-anu-bilegdemberels-projects.vercel.app';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      console.log('API URL:', API_URL);
      console.log('Full request URL:', `${API_URL}/chat`);
      console.log('Request payload:', { message });
      
      // First, try a preflight request
      const preflightResponse = await fetch(`${API_URL}/chat`, {
        method: 'OPTIONS',
        headers: {
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type, Accept',
          'Origin': window.location.origin
        }
      });
      
      console.log('Preflight response:', preflightResponse);
      
      const response = await axios.post(`${API_URL}/chat`, {
        message,
        userType: typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        withCredentials: false
      });
      
      return response.data.reply;
    } catch (error: any) {
      console.error('Detailed error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
        config: error.config
      });
      throw new Error(error.response?.data?.error || error.message || 'Failed to get response');
    }
  }
};