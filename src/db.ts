import { Client } from 'pg';

const client=new Client({
    database: 'contact_form',
    password: 'password',
    user: 'root',
    host: 'postgres_db',
    port: 5432 
})

client.connect(function (err: any) {
    if (err) throw err;
    console.log("Postgres is connected!");
  });
  
  export default client;