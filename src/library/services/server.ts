import axios, { AxiosInstance, AxiosResponse } from "axios";

const server: AxiosInstance = axios.create();

// Request interceptor for API calls
server.interceptors.request.use(
    (config: any) => {
        config.headers = config.headers || {}; // Ensure headers is not undefined
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for API calls
server.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async function (error: any) {
        const originalRequest = error.config;
        // handle the error here. E.g.:
        // if (error.response.status === 403 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     const access_token = await refreshAccessToken();
        //     axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
        //     return server(originalRequest);
        // }
        return Promise.reject(error);
    }
);

export default server;
