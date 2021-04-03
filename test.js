const { User } = require('./models/index');

async function test() {
  console.log('Hello world~!!!');

  let kurt = await User.create({
    username: 'kpessa',
    password: 'hello',
    email: 'kpessa@gmail.com',
    balance: 100,
  });
  console.log(kurt);
}

module.export = { test };
