import { pool } from "../db.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config.js";

export const getUser = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM user");
  res.send({ message: "User get successfully.", user: rows });
};

export const register = async (req, res) => {
  const { name, address, phone, password } = req.body;
  const newCustomer = { name, address, phone, password };
  await pool.query("INSERT INTO user set ?", [newCustomer]);
  res.send({ message: "Register user successfully." });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;

  const newCustomer = req.body;
  await pool.query("UPDATE user set ? WHERE id = ?", [newCustomer, id]);
  res.send({ message: "Update data successfully." });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM user WHERE id = ?", [id]);
  res.send({ message: "Delete data successfully." });
};

const signToken = (id) => {
  return jwt.sign({ id: id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

export const login = async (req, res) => {
  const { id } = req.body;
  const [result] = await pool.query("SELECT * FROM user WHERE id = ?", [id]);
  res.send({
    message: "Delete data successfully.",
    data: { ...result[0], token: signToken(result[0].id) },
  });
};
