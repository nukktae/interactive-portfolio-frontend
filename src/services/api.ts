// Use Next.js API route to proxy requests to backend (avoids CORS issues)
const getApiUrl = () => {
  // Always use the Next.js API route (same origin, no CORS issues)
  if (typeof window !== 'undefined') {
    return '/api/chat';
  }
  // Server-side: use environment variable or default to localhost backend
  return process.env.BACKEND_URL || 'http://localhost:5001';
};

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      const apiUrl = getApiUrl();
      console.log('Sending request to:', apiUrl);
      
      const userType = typeof window !== 'undefined' ? localStorage.getItem('userType') || 'visitor' : 'visitor';
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          userType
        })
      });

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          try {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          } catch {
            // Use default error message
          }
        }
        console.error('API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage
        });
        
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      return data.reply;
    } catch (error: any) {
      console.error('Chat service error:', error);
      throw new Error(error.message || 'Failed to get response from chat service');
    }
  }
};