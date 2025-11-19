import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || (typeof window !== 'undefined' && window.location.hostname === 'localhost' 
  ? 'http://localhost:5001' 
  : 'https://anu-portfolio-backend.vercel.app');

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      console.log('Sending request to:', `${API_URL}/chat`);
      
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit',
        body: JSON.stringify({
          message,
          userType: typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor'
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        
        if (response.status === 0) {
          throw new Error('Network error - CORS issue or server unavailable');
        }
        
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
      
      const data = await response.json();
      return data.reply;
    } catch (error: any) {
      console.error('Detailed error:', error);
      throw new Error(error.message || 'Failed to get response');
    }
  }
};