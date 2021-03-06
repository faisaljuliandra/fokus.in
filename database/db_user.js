const { nanoid } = require("nanoid");

module.exports = [
    {
        id: nanoid(),
        username: "admin001",
        password: "admin001",
        nama: "Admin",
        email: "admin@gmail.com",
        jenisKelamin: "Pria",
        noTelp: "08986236202",
        role: "Admin",
        goalId: nanoid(),
        taskListId: nanoid()
    },
]
