import forge from 'mappersmith';
import { apiBaseUrl } from '../../../constants/api-baseUrl';
import { ServerErrorMiddleware } from '../../middleware/server-error-middleware';
// import { AccessTokenMiddleware } from '../../middleware/acess-token-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';
import { ServerResponseMiddleware } from '../../middleware/server-response-middleware';

const ServerErrors = ServerErrorMiddleware();
const ServerResponse = ServerResponseMiddleware();
// const AccesTokenMiddleware = AccessTokenMiddleware();
const client = forge({
  host: apiBaseUrl,
  middleware: [ServerErrors, ServerResponse, AccesTokenMiddleware, EncodeJson],
  resources: {
    Auth: {
      login: {
        path: '/auth/login',
        method: 'post',
        bodyAttr: 'loginParams',
      },
    },
  },
});

export const login = loginParams => {
  return client.Auth.login({ loginParams });
};