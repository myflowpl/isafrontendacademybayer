import { Express } from 'express';
import { dataSource } from '../db/data-source';
import { Burger } from '../db/entities/burger.entity';

const burgerRepository = dataSource.getRepository(Burger);

export function burgersRoutes(app: Express) {

  const burgers = [];

  app.post('/burgers', function(req, res) {

    const row = {
      id: Date.now(),
      ...req.body
    };
  
    burgers.push(row);
  
    // res.json(row);
    res.end();
  });
  
  app.get('/burgers', async function(req, res) {

    const burgers = await burgerRepository.find();

    res.json(burgers);
  })
  
}