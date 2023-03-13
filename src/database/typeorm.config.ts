import { ENV } from 'src/config'

export const typeOrmConfig = {
  type: ENV.DATABASE.DIALECT as 'mysql',
  host: ENV.DATABASE.HOST,
  port: Number(ENV.DATABASE.PORT),
  username: ENV.DATABASE.USERNAME,
  password: ENV.DATABASE.PASSWORD,
  database: ENV.DATABASE.NAME,
  entities: ['dist/**/*.entity{.js,.ts}'],
  migrations: ['dist/**/migrations/*{.js,.ts}'],
  seeds: ['dist/**/seeds/*{.js,.ts}'],
  synchronize: true,
  insecureAuth: true
}