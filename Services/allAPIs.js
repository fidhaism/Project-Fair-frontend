// 
import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI"
//Register API CALL
export const registerAPI = async(user) => {
return await commonAPI("post",`${serverURL}/register`, user, "")
}