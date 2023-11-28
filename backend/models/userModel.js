import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Nome do estagiário deve ser informado"],
    },
    email: {
      type: String,
      required: [true, "E-mail do estagiário deve ser informado"],
      unique: [true, "E-mail do estagiário deve ser único"],
    },
    password: {
      type: String,
      required: [true, "Senha do estagiário deve ser informada"],
    },
    course: {
      type: String,
    },
    role: {
      type: String,
      required: [true, "Tipo de usuário deve ser informado"],
      enum: {
        values: ["student", "coordinator"],
        message: "O tipo de usuário deve ser estudante ou coordenador",
      },
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", schema);

export default User;
