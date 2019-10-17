import axios from 'axios';
import _ from 'lodash';

const config = (() => {
  const env = {
    production: {
      live: {
        // TODO: Live ip address 변경 필요
        uri: 'http://13.230.5.164:8080'
      },
      test: {
        uri: 'http://13.230.5.164:8080'
      }
    },
    development: {
      uri: 'http://localhost:8080'
    }
  };
  let conf = env[process.env.NODE_ENV];
  if (process.env.NODE_ENV === 'production') {
    conf = conf[process.env.BUILD_MODE || 'test'];
  }
  return _.defaultsDeep(conf, {
    uri: 'http://localhost:8080'
  });
})();

const apiServer = axios.create({
  baseURL: config.uri,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

apiServer.defaults.withCredentials = false;
apiServer.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

apiServer.interceptors.request.use((config) => {
  console.warn('request CONFIG', config);
  return config;
}, (error) => {
  console.error('request ERROR', error);
  return Promise.reject(error);
});

apiServer.interceptors.response.use((response) => {
  console.warn('response DATA', response);
  if (response.status === 302) {
    if (response.headers.location) {
      return;
    }
  }

  return response;
}, (error) => {
  console.error('response ERROR', JSON.stringify(error));

  if (error.response.status === 403) {
    alert(error.response.data);
  } else if (error.response.status === 500) {
    alert('Server Internal Error');
  } else if (error.response.status === 401) {
    alert('Unauthorized! Please sign in!');
    // TODO: 로그인 페이지로 redirecting path setting
    this.props.history.push('/signin');
  }

  return Promise.reject(error);
});

export { axios, apiServer, config };
