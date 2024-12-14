import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://anu-portfolio-backend.vercel.app';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      console.log('Sending request to:', `${API_URL}/chat`);
      
      const response = await axios.post(`${API_URL}/chat`, {
        message,
        userType: typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Response:', response.data);
      
      if (response.data.error) {
        throw new Error(response.data.error);
      }
      
      return response.data.reply;
    } catch (error: any) {
      console.error('Chat API Error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Failed to get response';
      throw new Error(errorMessage);
    }
  }
};