class ApiError extends Error {
  constructor(response, ...params) {
    super(...params);
    this.response = response;
  }
}

export default ApiError;
