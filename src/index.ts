import { config, env } from '@/config/env';

config();

// eslint-disable-next-line no-console
console.log(`Started ${env.NODE_ENV} hello via bun!`);
