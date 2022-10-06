import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { registerAs } from '@nestjs/config';

const options: MikroOrmModuleSyncOptions = {
  type: 'postgresql',
  host: process.env.DATABASE_HOST,
  dbName: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  baseDir: process.cwd(),
  entities: ['dist/**/*entity.{ts,js}'],
  entitiesTs: ['src/**/*entity.ts'],
  schemaGenerator: {
    disableForeignKeys: false,
  },
  migrations: {
    disableForeignKeys: false,
  },
};
export default registerAs('database', () => {
  return options;
});
