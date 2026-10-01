import axios from "axios";

const httpClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

function getResponseData(response) {
    return response.data?.data ?? response.data;
}

function handleError(error) {
    const message =
        error.response?.data?.message ||
        error.message ||
        "Có lỗi xảy ra khi gọi API";

    throw new Error(message);
}

const http = {
    async get(url, config = {}) {
        try {
            const response = await httpClient.get(url, config);

            return getResponseData(response);
        } catch (error) {
            handleError(error);
        }
    },

    async post(url, data, config = {}) {
        try {
            const response = await httpClient.post(url, data, config);

            return getResponseData(response);
        } catch (error) {
            handleError(error);
        }
    },

    async put(url, data, config = {}) {
        try {
            const response = await httpClient.put(url, data, config);

            return getResponseData(response);
        } catch (error) {
            handleError(error);
        }
    },

    async patch(url, data, config = {}) {
        try {
            const response = await httpClient.patch(url, data, config);

            return getResponseData(response);
        } catch (error) {
            handleError(error);
        }
    },

    async delete(url, config = {}) {
        try {
            const response = await httpClient.delete(url, config);

            return getResponseData(response);
        } catch (error) {
            handleError(error);
        }
    },
};

export { httpClient, http };
