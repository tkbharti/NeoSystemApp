import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;   
 
const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor (optional, for adding dynamic headers like tokens)
apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Get token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor (optional, for global error handling or data transformation)
apiService.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
      
    // Handle specific error codes, e.g., redirect to login on 401
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access. Redirecting to login...');
      // Implement redirection logic
      localStorage.removeItem('token'); 
      window.location.href = '/ ';
    }
    return Promise.reject(error);
  }
);

const userService = {
  login: (userData) => apiService.post('/user/login', userData), 
  checkUser: () => apiService.get('/user/checktoken') 
}  

export { 
  userService 
};