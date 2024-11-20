const { expect } = require('chai');
const supertest = require('supertest');
const generador = require('./generador/task.js');

const request = supertest('http://127.0.0.1:3000');

let token = '';

const login = async () => {
  const loginData = {
    email: 'simonleybo@gmail.com',
    password: '1234'
  };

  const response = await request.post('/api/users/login').send(loginData);
  token = response.body.token;
  return token;
};

describe('test apirestful', () => {
  before(async () => {
    await login();
  });

  describe('GET', () => {
    it('total: debería retornar un status 200', async () => {
      const response = await request
        .get('/api/tasks')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).to.eql(200);
    });

    it('id: debería retornar un status 200', async () => {
      const response = await request
        .get('/api/tasks/65b91cc575012768396918c6')
        .set('Authorization', `Bearer ${token}`);
      expect(response.status).to.eql(200);
    });
  });

  describe('POST', () => {
    it('debería incorporar una tarea', async () => {
      const tareaEnviada = generador.get();

      const response = await request
        .post('/api/tasks')
        .set('Authorization', `Bearer ${token}`)
        .send(tareaEnviada);

      expect(response.status).to.eql(201);

      const tareaGuardada = response.body;

      expect(tareaGuardada).to.include.keys(
        'title', 'description', 'urgent', 'estimatedTime', 'timeUnit', 'status',
        'timeUsed', 'scrumSection', 'priority', 'createdDate', 'dueDate', 'environment'
      );

      expect(tareaEnviada.title).to.eql(tareaGuardada.title);
      expect(tareaEnviada.description).to.eql(tareaGuardada.description);
      expect(tareaEnviada.urgent).to.eql(tareaGuardada.urgent);
      expect(tareaEnviada.estimatedTime).to.eql(tareaGuardada.estimatedTime);
      expect(tareaEnviada.timeUnit).to.eql(tareaGuardada.timeUnit);
      expect(tareaEnviada.status).to.eql(tareaGuardada.status);
      expect(tareaEnviada.timeUsed).to.eql(tareaGuardada.timeUsed);
      expect(tareaEnviada.scrumSection).to.eql(tareaGuardada.scrumSection);
      expect(tareaEnviada.priority).to.eql(tareaGuardada.priority);
      expect(tareaEnviada.environment).to.eql(tareaGuardada.environment);
    });
  });
});
