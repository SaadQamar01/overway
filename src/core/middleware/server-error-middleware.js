import { ServerErrorService } from '../services/server-errors/server-errors.service';

export const ServerErrorMiddleware = () => {
  return () => ({
    response(next, renew) {
      return next().catch(res => {
        const response = res.data();
        if (response.code !== 200) {
          console.log('Error ', response);
          ServerErrorService(response);
        }
        return next();
      });
    },
  });
};
