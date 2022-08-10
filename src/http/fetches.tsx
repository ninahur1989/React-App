import ResourceModel from "../models/ResourceModel";
import ResourceResponse from "../models/ResourceResponse";
import UserModel from "../models/UserModel";
import UserResponse from "../models/UserResponse";
import config from "../api-constants"


export const getUser = async (): Promise<UserModel> => {
    const result: Response = await fetch("${config}/api/users/2");
    const res = await result.json();
    const user: UserModel = res.data;
    return user;
};

export const getUserListByPage = async (): Promise<UserResponse> => {
    const result: Response = await fetch(`${config}/api/users?page=2`);
    const res = await result.json();

    const userList: UserResponse = res;
    return userList;
};

export const getResource = async (): Promise<ResourceModel> => {
    const result: Response = await fetch(`${config}/api/unknown/2`);
    const res = await result.json();

    const resource: ResourceModel = res.data;

    return resource;
};

export const getResourceListByPage = async (): Promise<ResourceResponse> => {
    const result: Response = await fetch(`${config}/api/unknown`);
    const res = await result.json();
    const resourceList: ResourceResponse = res;
    return resourceList;
};