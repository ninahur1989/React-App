import UserModel from "./UserModel";

interface UserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: UserModel[];
}

export default UserResponse;
