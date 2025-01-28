const callAPI = async (url, method, data = null) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY;

    const options = {
      method: method,
      headers: {
        "X-Rapidapi-Key": apiKey,
        "X-Rapidapi-Host": `moviesdatabase.p.rapidapi.com`,
        Host: `moviesdatabase.p.rapidapi.com`,
        "Content-Type": "application/json",
      },
    };

    // Add body only for POST and PUT requests
    if (data && (method === "POST" || method === "PUT")) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(
      `https://moviesdatabase.p.rapidapi.com${url}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const api = {
  post: async (url, data) => {
    const response = await callAPI(url, "POST", data);
    return response;
  },
  get: async (url) => {
    const response = await callAPI(url, "GET");
    return response;
  },
  put: async (url, data) => {
    const response = await callAPI(url, "PUT", data);
    return response;
  },
  delete: async (url) => {
    const response = await callAPI(url, "DELETE");
    return response;
  },
};

export default api;
