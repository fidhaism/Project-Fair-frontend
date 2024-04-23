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

// AddProject API Call
export const addProjectAPI = async(reqBody,reqHeader) => {
  return await commonAPI("post", `${ serverURL}/project/add-project`,reqBody,reqHeader) 
};

// Get Home Project API Call
export const getHomeProjectAPI = async() => {
  return await commonAPI("get", `${ serverURL}/project/home-project`,"","") 
};

//Get all users Project API Call
export const getUsersProjectAPI = async(reqHeader) => {
  return await commonAPI("get", `${ serverURL}/project/all-user-project`,"",reqHeader) 
};