import axios from "axios";

class ApiService {
  constructor() {
    let service = axios.create({
      withCredentials: false,
      // baseURL: "https://api.publicapis.org/entries",
      baseURL: "https://reqres.in",
    });

    service.interceptors.request.use(
      this.requestHandleSuccess,
      this.requestHandleError
    );
    service.interceptors.response.use(
      this.responseHandleSuccess,
      this.responseHandleError
    );
    this.service = service;
  }
  save(path, payload, config) {
    if (config) return this.service.post(path, payload, config);
    else return this.service.post(path, payload);
  }
  update(path, payload) {
    return this.service.put(path, payload);
  }
  findByParams(path, params) {
    return this.service.get(path, params);
  }
  findAll(path) {
    return this.service.get(path);
  }
  delete(path, params) {
    return this.service.delete(path, params);
  }
  setCustomHeaders(key, value) {
    this.service.defaults.headers.common[key] = value;
  }
  deleteCustomHeaders(key) {
    delete this.service.defaults.headers.common[key];
  }
  requestHandleSuccess(config) {
    // config.headers.common["Access-Control-Allow-Origin"] = "https://api.publicapis.org/entries";
    config.headers.common["Access-Control-Allow-Origin"] = "https://reqres.in";
    config.headers.common["Access-Control-Allow-Credentials"] = "false";
    return config;
  }
  requestHandleError = (error) => {
    return Promise.reject(error);
  };
  responseHandleSuccess(response) {
    return response;
  }
  responseHandleError = (error) => {
    switch (error.response.status) {
      case 400:
        console.log("Incorrect request payload sent");
        break;
      case 401:
        console.log("Not Authorized for requested resource");
        break;
      case 404:
        console.log("Requested Resource Not Found");
        break;
      default:
        console.log("Default Requested Intercept");
        break;
    }
    return Promise.reject(error);
  };
}
export default ApiService;
