import mongoose from "mongoose";
import { MONGODB_HOST, MONGODB_PASSWORD, MONGODB_USER } from "../env.js";

const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/?retryWrites=true&w=majority`;

async function connect() {
  await mongoose.connect(connectionString);
}

export default connect;
