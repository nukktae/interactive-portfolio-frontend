import axios from 'axios';

const API_URL = 'https://anu-portfolio-backend-iequx7uxi-anu-bilegdemberels-projects.vercel.app';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          message,
          userType: typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor'
        })
      });
      
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
      }
      
      const data = await response.json();
      return data.reply;
    } catch (error: any) {
      console.error('Detailed error:', error);
      throw new Error(error.message || 'Failed to get response');
    }
  }
};