import { sequelize } from './models/connection'
import './models'

// sequelize.sync({ alter: true }).then((res) => console.log(res))

// use this for complete base reset with command yarn sync
sequelize.sync({ force: true }).then((res) => console.log(res))
