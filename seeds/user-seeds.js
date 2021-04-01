const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'jmax407',
        email: 'jmax407@gmail.com',
        password: 'password123'
      },
      {
        username: "djoiner0",
        email: "wharkin0@de.vu",
        password: 'password123'
      }, {
        username: "ccoode1",
        email: "solivet1@edublogs.org",
        password: 'password123'
      }, {
        username: "cpenhearow2",
        email: "kfarrah2@ox.ac.uk",
        password: 'password123'
      }, {
        username: "ikippen3",
        email: "fwatkiss3@npr.org",
        password: 'password123'
      }, {
        username: "wnucciotti4",
        email: "rshave4@gravatar.com",
        password: 'password123'
      }, {
        username: "bscates5",
        email: "psperrett5@sogou.com",
        password: 'password123'
      }, {
        username: "abreadmore6",
        email: "mbrailsford6@dagondesign.com",
        password: 'password123'
      }, {
        username: "apenhalurick7",
        email: "tsaph7@usatoday.com",
        password: 'password123'
      }, {
        username: "ksillars8",
        email: "snewland8@t-online.de",
        password: 'password123'
      }]
    
    const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
    
    module.exports = seedUsers;