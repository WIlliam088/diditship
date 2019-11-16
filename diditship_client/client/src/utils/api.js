let backendHost;
const apiVersion = 'v1';

const hostname = window && window.location && window.location.hostname;

// if(hostname === 'localhost:9000') {
//     backendHost = 'http://localhost:9001';
//} else if(hostname === 'http://didweshipit.brooklynbedding.com') {
//    backendHost = 'http://didweshipit.brooklynbedding.com';
// } else if(/^qa/.test(hostname)) {
//     backendHost = `https://api.${hostname}`;
// } else {
//     backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:9001';
// }


backendHost = 'http://didweshipit.brooklynbedding.com/api';
// backendHost = "http://localhost:9000";

export const API_ROOT = `${backendHost}/api/${apiVersion}`;