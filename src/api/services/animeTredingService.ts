import api from "../api"

export interface IParams {
    page: string
    limit: string
}

export const initialParams: IParams = {
    page: "1",
    limit: "10"
}

const pathUrl = "trending/anime"

const animeTrandingService = {
    getTrending: (params: IParams = initialParams) => api.get(pathUrl, { params }),
}

export default animeTrandingService;