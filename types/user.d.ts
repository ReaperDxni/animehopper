import {z} from 'zod'

const userSchema = z.object({ id: z.uuid(), name: z.string(), password: z.string() });

type User = z.infer<typeof userSchema>;
