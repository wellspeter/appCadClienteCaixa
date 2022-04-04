const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://yjypqdghzinhph:63a766027d025be2c2cb24c9f5770057e3c86bbf29e004edf533e98d034ff7c7@ec2-34-231-183-74.compute-1.amazonaws.com:5432/db4ngoiaiegdp6',
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports = {
    Client: Client,
    client: client
}