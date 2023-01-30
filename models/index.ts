import { User } from './user'
import { Auth } from './auth'
import { Item } from './item'
import { Contact } from './contact'

Auth.belongsTo(User)
Item.belongsTo(User)
User.hasMany(Item)
Item.hasMany(Contact)

export { User, Auth, Item, Contact }
