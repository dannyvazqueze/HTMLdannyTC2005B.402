import pool from "../bd/bd.js";
import CryptoJS from "crypto-js";

// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // encriptar password
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.SECRET_KEY
    ).toString();

    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING *",
      [name, email, encryptedPassword]
    );

    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0)
      return res.status(404).json("Usuario no encontrado");

    const bytes = CryptoJS.AES.decrypt(
      user.rows[0].password,
      process.env.SECRET_KEY
    );

    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword !== password)
      return res.status(401).json("Password incorrecto");

    res.json({
      message: "Login exitoso",
      user: user.rows[0],
    });
  } catch (error) {
    console.log("ERROR:", error)
    res.status(500).json(error.message);
  }
};
