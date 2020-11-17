import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Frodo Baggins',
    email: 'frodo@test.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Samwise Gamgee',
    email: 'samwise@test.com',
    password: bcrypt.hashSync('123456', 10)
  }
];

export default users;
