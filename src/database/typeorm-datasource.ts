import { ENV } from "src/config";
import { DataSource } from "typeorm";


export const typeOrmConfigOptions = {
    type: ENV.DATABASE.DIALECT as 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'prosoft',
    entities: [ 'dist/**/*.entity{.js,.ts}' ],
    migrations: ['dist/**/migrations/*{.js,.ts}'],
    seeds: ['dist/**/seeds/*{.js,.ts}'],
    logging: true
  }

  
  
export default new DataSource(typeOrmConfigOptions)