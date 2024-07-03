const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();  
const uri = process.env.MONGODB_URI;  
if (!uri) {
  console.error('Falta la variable de entorno MONGODB_URI');
  process.exit(1);
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB Atlas");
    return client.db('ReactProyecto');  
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
    process.exit(1);  
  }
}

module.exports = connectToDatabase;  