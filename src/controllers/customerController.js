import { pool } from "../db.js";

export const getCoustomer = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM customer");
  res.send({ customers: rows });
};

export const createCustomers = async (req, res) => {
  const { name, address, phone } = req.body;
  const newCustomer = { name, address, phone };
  const data = await pool.query("INSERT INTO customer set ?", [newCustomer]);
  res.send("Create data successfully.");
};

export const editCustomer = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("SELECT * FROM customer WHERE id = ?", [
    id,
  ]);
  res.send({ customer: result[0] });
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;

  const newCustomer = req.body;
  await pool.query("UPDATE customer set ? WHERE id = ?", [newCustomer, id]);
  res.send("Update data successfully");
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  const result = await pool.query("DELETE FROM customer WHERE id = ?", [id]);
  res.send("Delete data successfully.");
};
