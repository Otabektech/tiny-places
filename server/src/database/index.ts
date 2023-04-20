import { MongoClient, MongoClientOptions } from "mongodb";
import { DataBase } from "../lib/types";

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;

const options: MongoClientOptions = {
  useNewUrlParser: true,
};

export const connectDatabase = async (): Promise<DataBase> => {
  const client = await MongoClient.connect(url, options);
  const db = client.db("main");
  return { listings: db.collection("test_listings") };
};
