import forge from 'mappersmith';
import { apiBaseUrl } from '../../../constants/api-baseUrl';
import { ServerErrorMiddleware } from '../../middleware/server-error-middleware';
import { ServerResponseMiddleware } from '../../middleware/server-response-middleware';
// import { AccessTokenMiddleware } from '../../middleware/access-token-middleware';
import EncodeJson from 'mappersmith/middleware/encode-json';

const ServerErrors = ServerErrorMiddleware();
const ServerResponse = ServerResponseMiddleware();
// const AccesTokenMiddleware = AccessTokenMiddleware();
const client = forge({
  host: apiBaseUrl,
  middleware: [ServerErrors, ServerResponse, AccesTokenMiddleware, EncodeJson],
  resources: {
    Core: {
      getLanguages: {
        path: '/i18n/languages',
        method: 'get',
      },
    },
  },
});


export const getLanguagesService = () => {
  return client.Core.getLanguages();
};
