/* eslint-disable prettier/prettier */
// export default {
//     connectionString: 'mongodb://127.0.0.1:27017/onlineshop'
// }

class Config { }

class DevelopmentConfig extends Config {
    public isDevelopment = true;
    public connectionString = 'mongodb://127.0.0.1:27017/nest-rest-api'
}

class ProductionConfig extends Config {
    public isDevelopment = false;
    public connectionString = 'mongodb://127.0.0.1:27017/nest-rest-api'
    // public connectionString = "mongodb://user:password@localhost:27017/northwind";
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
