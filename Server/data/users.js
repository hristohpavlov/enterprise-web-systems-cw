import bcrypt from 'bcryptjs';

const users = [
    {
        name: "Admin",
        email: "admin@admin.admin",
        password: bcrypt.hashSync("admin", 10),
        isAdmin: true,
    },
    {
        name: "User",
        email: "user@user.user",
        password: bcrypt.hashSync("user", 10),
    },
];

export default users;