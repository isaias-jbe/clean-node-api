import { Db, MongoClient } from 'mongodb'

export const MongoHelper = {
  connection: null as unknown as MongoClient,
  async connect (uri: string): Promise<void> {
    this.connection = await MongoClient.connect(globalThis.__MONGO_URI__)
  },
  async disconnect (): Promise<void> {
    await this.connection.close()
  },
  async database (dbName: string): Promise<Db> {
    return this.connection.db(globalThis.__MONGO_DB_NAME__)
  }
}
