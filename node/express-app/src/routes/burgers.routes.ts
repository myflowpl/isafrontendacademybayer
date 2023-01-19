import { Express } from 'express';

export function burgersRoutes(app: Express) {

  const burgers = [];

  app.post('/burgers', function(req, res) {
  
    const row = {
      id: Date.now(),
      ...req.body
    };
  
    burgers.push(row);
  
    res.json(row);
  
  });
  
  app.get('/burgers', function(req, res) {
    res.json(burgers);
  })
  
}