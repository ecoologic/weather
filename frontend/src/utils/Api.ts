import log from './log';

export interface IApiResponse extends Record<string, any> {
  success: boolean;
  error?: string;
  message?: string;
}

// Usage:
// const response = await Api.get(path, params)
// if (response.success) {
//   // Cool...
// } else {
//   // No log needed
//   "display"(response.message)
// }
const Api = {
  get: async (url: string, params = {}): Promise<IApiResponse> => {
    try {
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      const result = await response.json();
      const success = response.status.toString()[0] === '2'; // 2xx

      return { success, data: result };
    } catch (error) {
      log.error(`Api.get ${url}`, error);
      return { success: false, message: error.message, error };
    }
  },
};

export default Api;
