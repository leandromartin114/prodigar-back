import { Auth } from '../models'
import { User } from '../models'

//getting the user data
// export async function getUserData(userId: number) {
// 	try {
// 		const user = await User.findByPk(userId);
// 		return user;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
//updating a user
// export async function updateUser(userId: number, data) {
// 	if (data.password) {
// 		const dataForUser = {
// 			fullName: data.fullName,
// 			email: data.email,
// 		};
// 		const passwordHash = getSHA256ofString(data.password);
// 		const dataForAuth = {
// 			fullName: data.fullName,
// 			email: data.email,
// 			password: passwordHash,
// 		};
// 		try {
// 			const userUpdated = await User.update(dataForUser, {
// 				where: { id: userId },
// 			});
// 			const authUpdated = await Auth.update(dataForAuth, {
// 				where: { userId: userId },
// 			});
// 			return userUpdated;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	} else {
// 		const dataForUpdate = {
// 			fullName: data.fullName,
// 			email: data.email,
// 		};
// 		try {
// 			const userUpdated = await User.update(dataForUpdate, {
// 				where: { id: userId },
// 			});
// 			const authUpdated = await Auth.update(dataForUpdate, {
// 				where: { userId: userId },
// 			});
// 			return userUpdated;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// }
