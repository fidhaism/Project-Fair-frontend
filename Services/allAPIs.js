import { serverURL } from "./serverURL";
import { commonAPI} from "./commonAPI";

//Register API Call
export const registerAPI = async(user) => {
  return await commonAPI("post", `${ serverURL}/register`,user, "")
};

// Login API Call
export const loginAPI = async(user) => {
  return await commonAPI("post", `${ serverURL}/login`,user, "")
};

// Add API Call
export const addProjectAPI = async(reqBody,reqHeader) => {
  return await commonAPI("post", `${ serverURL}/project/add-project`,reqBody,reqHeader) 
};
