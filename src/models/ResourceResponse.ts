import ResourceModel from "./ResourceModel";

interface ResourceResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: ResourceModel[];
}

export default ResourceResponse;
