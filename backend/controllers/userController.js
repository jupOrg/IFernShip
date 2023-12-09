import { compare, hash } from "bcrypt";
import jsonWebToken from "jsonwebtoken";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { TOKEN_SECRET } from "../env.js";
import User from "../models/userModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const listUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).send(users);
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao listar.");
  }
};

const findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send(`Não há usuário com o ID ${id}.`);
    }

    res.status(200).send(user);
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao obter usuário.");
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, course, role } = req.body;

    const user = await User.findOne({
      email: email,
    });

    if (user) {
      return res.status(400).send("Já existe um usuário com esse email.");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("As senhas não coincidem.");
    }

    const passwordHash = password ? await hash(password, 10) : undefined;

    await User.create({
      name,
      email,
      password: passwordHash,
      course,
      role,
    });

    return res.status(201).json("Usuário criado com sucesso.");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao salvar.");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email: email,
  });

  if (!user) {
    return res.status(401).send("Email ou senha inválido.");
  }

  const isPassword = await compare(password, user.password);

  if (!isPassword) {
    return res.status(401).send("Email ou senha inválido.");
  }

  const token = jsonWebToken.sign(
    {
      name: user.name,
    },
    TOKEN_SECRET,
    {
      expiresIn: "1d",
      algorithm: "HS256",
      subject: String(user.id),
    }
  );

  return res.status(201).json({ token, user });
};

const edit = async (req, res) => {
  try {
    const image = req.file;
    const { id } = req.params;
    const { name, email, password, course, type } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(400).send("Não existe um usuário com esse id.");
    }

    const imagePath = image?.filename;
    const imageType = image?.mimetype;

    const passwordHash = await hash(password, 10);

    await User.updateOne({
      name,
      email,
      password: passwordHash,
      course,
      role,
      image: image
        ? {
            data: fs.readFileSync(join(__dirname, "..", "uploads", imagePath)),
            contentType: imageType,
          }
        : null,
    });

    return res.status(200).json("Usuário editado com sucesso.");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao editar.");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).send(`Não há usuário com o ID ${id}.`);
    }

    res.status(200).send("Usuário deletado com sucesso!");
  } catch (ex) {
    res.status(400).send(ex?.errors || "Falha ao deletar.");
  }
};

const loggedUser = async (req, res) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).send(`Não há usuário com o ID ${id}.`);
    }

    res.status(200).send(user);
  } catch (ex) {
    console.error(ex)
    res.status(400).send(ex?.errors || "Falha ao obter usuário.");
  }
}

export default {
  listUsers,
  findUser,
  register,
  login,
  edit,
  deleteUser,
  loggedUser
};
