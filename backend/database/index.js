import mongoose from "mongoose";

const connectionString = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}/?retryWrites=true&w=majority`;

async function connect() {
  await mongoose.connect(connectionString);
}

export default connect;
