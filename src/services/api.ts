import axios, { AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';

export const chatService = {
  sendMessage: async (message: string) => {
    try {
      console.log('Sending to:', `${API_URL}/chat`);
      const response = await axios.post(`${API_URL}/chat`, { message });
      console.log('Response:', response.data);
      return response.data.reply;
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error details:', axiosError.response?.data || axiosError.message);
      throw new Error(
        (axiosError.response?.data as { error: string })?.error || 
        'Failed to send message'
      );
    }
  }
}; 