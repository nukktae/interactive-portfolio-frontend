import axios from 'axios';

const API_URL = 'https://anu-portfolio-backend-iequx7uxi-anu-bilegdemberels-projects.vercel.app';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      console.log('API URL:', API_URL);
      console.log('Full request URL:', `${API_URL}/chat`);
      console.log('Request payload:', { message });
      
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message,
          userType: typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor'
        })
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.reply;
    } catch (error: any) {
      console.error('Detailed error:', error);
      throw new Error(error.message || 'Failed to get response');
    }
  }
};