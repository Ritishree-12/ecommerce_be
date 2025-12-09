import db from "../config/db.js";

export const createUser = (req, res) => {
  const { full_name, email, mobile, password } = req.body;

  if (!full_name || !email || !mobile || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "INSERT INTO use_table (full_name, email, mobile, password) VALUES (?, ?, ?, ?)";

  db.query(sql, [full_name, email, mobile, password], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "User Created Successfully",
      id: result.insertId,
    });
  });
};
