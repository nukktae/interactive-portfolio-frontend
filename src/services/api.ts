import axios from 'axios';

// Determine API URL - prioritize environment variable, then use production domain
const getApiUrl = () => {
  // For local development
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
  }
  
  // Check if environment variable is set
  if (process.env.NEXT_PUBLIC_API_URL) {
    const envUrl = process.env.NEXT_PUBLIC_API_URL;
    // Ignore old deployment URLs (they change with each deploy)
    if (envUrl.includes('anu-portfolio-backend-iequx7uxi') || 
        envUrl.includes('anu-portfolio-backend-') && envUrl.includes('-anu-bilegdemberels-projects')) {
      console.warn('⚠️ Ignoring old deployment URL from environment variable. Using production domain instead.');
      return 'https://anu-portfolio-backend.vercel.app';
    }
    // Use the environment variable if it's a valid production URL
    return envUrl;
  }
  
  // Production - use the stable Vercel domain
  return 'https://anu-portfolio-backend.vercel.app';
};

const API_URL = getApiUrl();

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