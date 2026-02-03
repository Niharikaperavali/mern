let users = [];
let id = 1;

// CREATE USER
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = {
    id: id++,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};

// GET ALL USERS
exports.getUser = (req, res) => {
  res.status(200).json(users);
};

// GET USER BY ID
exports.getUserById = (req, res) => {
  const idParam = Number(req.params.id);
  const user = users.find(u => u.id === idParam);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

// UPDATE USER
exports.editUser = (req, res) => {
  const idParam = Number(req.params.id);
  const user = users.find(u => u.id === idParam);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (req.body.name !== undefined) {
    user.name = req.body.name;
  }

  if (req.body.email !== undefined) {
    user.email = req.body.email;
  }

  res.status(200).json(user);
};

// DELETE USER
exports.deleteUser = (req, res) => {
  const idParam = Number(req.params.id);
  const index = users.findIndex(u => u.id === idParam);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.status(200).json({ message: "User deleted successfully" });
};
