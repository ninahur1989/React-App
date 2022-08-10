import { useEffect, useState } from "react";
import ResourceResponse from "../models/ResourceResponse";
import { getResourceListByPage } from "../http/fetches";
import ListComponent from "./ListComponent";

const ResourceComponent = () => {
    const [resourceList, setResourceListToState] = useState<ResourceResponse>();

    useEffect(() => {
        const init = async () => {
            const resourceList: ResourceResponse =
                await getResourceListByPage();
            setResourceListToState(resourceList);
        };

        init();
    }, []);

    return (
        <div >
            <ul>
                <li>Page:{resourceList?.page}</li>
                <li>Per page: {resourceList?.per_page}</li>
                <li>Total: {resourceList?.total}</li>
                <li>Total pages: {resourceList?.total_pages}</li>
            </ul>
            <div>
                <b>Users: </b>
                {resourceList?.data.map((resource, index) => {
                    return (
                        <ListComponent
                            key={index}
                            id={resource.id}
                            name={resource.name}
                            pantone_value={resource.pantone_value}
                            year={resource.year}
                            color={resource.color}
                        ></ListComponent>
                    );
                })}
            </div>
        </div>
    );
};

export default ResourceComponent;
