import * as z from 'zod';

export type Env = z.infer<typeof EnvSchema>;

const _optional = <S extends z.core.SomeType>(schema: S): z.ZodPipe<z.ZodTransform<unknown, unknown>, S> =>
  z.preprocess((v) => (v === '' ? undefined : v), schema);

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
});

export default EnvSchema;
