import mongoose from "mongoose";
import { DATABASE_URL } from "../env.js";

async function connect() {
  await mongoose.connect(DATABASE_URL);
}

export default connect;
