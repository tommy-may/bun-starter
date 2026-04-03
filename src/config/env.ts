import * as z from 'zod';

import { EnvSchema } from '@/schemas';

const { data, error, success } = EnvSchema.safeParse(process.env);

export const config = (): void => {
  if (success) return;

  const NODE_ENV = process.env.NODE_ENV || 'unknown';

  console.error(`Error parsing \`.env.${NODE_ENV}\` file:`);
  console.error(JSON.stringify(z.treeifyError(error).properties, undefined, 2));

  process.exit(1);
};

export const env = data!;
