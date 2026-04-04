import * as z from 'zod';

export type Env = z.infer<typeof EnvSchema>;

const _optional = <S extends z.ZodType>(
  schema: S,
  def: z.core.util.NoUndefined<z.core.output<S>>,
): z.ZodPipe<z.ZodTransform, z.ZodDefault<S>> => z.preprocess((v) => (v === '' ? undefined : v), schema.default(def));

export const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
});
