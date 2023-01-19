import { Express } from 'express';
import { dataSource } from '../db/data-source';
import { Burger } from '../db/entities/burger.entity';

const burgerRepository = dataSource.getRepository(Burger);

export function burgersRoutes(app: Express) {

  app.post('/burgers', async function(req, res) {

    const data = {
      ...req.body
    };

    const burger = burgerRepository.create(data);
  
    await burgerRepository.save(burger);
  
    res.json(burger);
  });
  
  app.get('/burgers', async function(req, res) {

    const burgers = await burgerRepository.find({
      order: {id: 'ASC'}
    });

    res.json(burgers);
  })

  app.put('/burgers/:id', async function(req, res) {
    
    const id = parseInt(req.params.id, 10);
    const data = req.body;

    const burger = await burgerRepository.findOneBy({ id });

    if(!burger) {
      return res.status(404).json({ error: `Burger ${id} not found`})
    }

    const updated = await burgerRepository.update(id, data);

    res.json(updated);
  })

  app.delete('/burgers/:id', async function(req, res) {
    
    const id = parseInt(req.params.id, 10);

    const burger = await burgerRepository.findOneBy({ id });

    if(!burger) {
      return res.status(404).json({ error: `Burger ${id} not found`})
    }

    const updated = await burgerRepository.delete(id);

    res.json(updated);
  })
  
}