import { useEffect, useState } from "react";
import UserResponse from "../models/UserResponse";
import { getUserListByPage } from "../http/fetches";
import ListComponent from "./ListComponent";

const UserComponent = () => {
    const [userList, setUserListToState] = useState<UserResponse>();

    useEffect(() => {
        const init = async () => {
            const userList: UserResponse = await getUserListByPage();
            setUserListToState(userList);
        };

        init();
    }, []);

    return (
        <div >
            <ul>
                <li>Page:{userList?.page}</li>
                <li>Per page: {userList?.per_page}</li>
                <li>Total: {userList?.total}</li>
                <li>Total pages: {userList?.total_pages}</li>
            </ul>
            <div>
                <b>Users: </b>
                {userList?.data.map((user, index) => {
                    return (
                        <ListComponent
                            key={index}
                            id={user.id}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            email={user.email}
                            avatar={user.avatar}
                        ></ListComponent>
                    );
                })}
            </div>
        </div>
    );
};

export default UserComponent;
