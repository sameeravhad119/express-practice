import { devEnvironment } from './dev.env';
import { prodEnvironment } from './prod.env';

export const getEnvironmentVariables = () => {
    if (process.env.NODE_ENV === 'production') {
        return prodEnvironment;
    }
    return devEnvironment;
}