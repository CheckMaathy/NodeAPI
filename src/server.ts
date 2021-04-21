import express from 'express';
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

/*
app.get('/', (request, response) => {
  //return response.json(users);
  return response.json({
    message: "Hello NLW #5",
  });
});

app.post('/users', (request, response) => {
  return response.json({
    message: "User Saved!"
  });
  
  const { name, email } = request.body;

  const user = { id: uuid(), name, email };

  users.push(user);

  return response.json(user);
  
});

app.put('/users/:id', (request, response) => {
  
  const { id } = request.params;
  const { name, email } = request.body;

  const userIndex = users.findIndex((user) => user.id === id );

  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found.' });

  }

  const user = { id, name, email };

  users[userIndex] = user;

  return response.json(user);
  
});

app.delete('/users/:id', (request, response) => {
  
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id );

  if (userIndex < 0) {
    return response.status(404).json({ error: 'User not found.' });

  }

  users.splice(userIndex, 1);

  return response.status(204).send();
  

});
*/

app.listen('3333', () => {

  console.log('Server is Running on port 3333');

});