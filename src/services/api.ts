import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      const url = `${API_URL}/chat`;
      console.log('Sending request to:', url);
      
      const response = await axios.post(url, { message }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 10000
      });
      
      if (!response.data || !response.data.reply) {
        throw new Error('Invalid response format from server');
      }
      
      return response.data.reply;
    } catch (error) {
      console.error('Full error:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(`Server error: ${error.response.data?.error || error.message}`);
        } else if (error.request) {
          throw new Error('No response from server. Please check your connection.');
        }
      }
      throw new Error('Failed to send message. Please try again.');
    }
  }
}; 