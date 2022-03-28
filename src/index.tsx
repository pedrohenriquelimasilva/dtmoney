import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [{
        id: 1,
        type: 'deposit',
        amount: 5000,
        category: 'Development',
        title: 'Web site',
        createdAt: new Date('2022-03-24T12:00:00.000z')
      },
      {
        id: 2,
        type: 'withdraw',
        amount: 2000,
        category: 'House',
        title: 'Aluguel',
        createdAt: new Date("2022-03-26T12:00:00.000z")
      }
      ]
    })
  },
  routes() {
    this.namespace = 'api'


    this.get("/transaction", () => {
      return this.schema.all('transaction')
    })

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', { ...data, createdAt: new Date() })
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);