import { github as githubDefaultConfig} from './defaultConfig';
import { github as githubConfig } from '../../config';

const config = {
    ...githubDefaultConfig,
    ...githubConfig
};


