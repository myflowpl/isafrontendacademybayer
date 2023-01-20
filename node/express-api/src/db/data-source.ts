import { DataSource } from 'typeorm';
import { Burger } from './entities/burger.entity';

export const dataSource = new DataSource({

  type: 'postgres',
  host: 'localhost',
  port: 5433,
  database: 'node_app',
  username: 'postgres', 
  password: 'admin',
  entities: [Burger],
  migrations: ["src/db/migrations/*.ts"],
});

dataSource.initialize()
  .then(() => console.log('DB CONNECTION SUCCESS'))
  .catch((err) => console.log('DB CONNECTION ERROR', err))