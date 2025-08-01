import api from "../api";

export interface IParams {
    page?: {
        limit?: number;
        offset?: number;
        cursor?: string | null;
    };
    filter?: Record<string, any>;
    sort?: string;
    searchTerm?: string;
}

export const initialParams: IParams = {
    page: {
        limit: 12,
        offset: 0
    }
};

const pathUrl = "anime";

const animeService = {
    getAnimes: (params: IParams = initialParams) => {
        const kitsuParams = {
            ...params,
            "page[limit]": params.page?.limit,
            "page[offset]": params.page?.offset,
            "page[cursor]": params.page?.cursor,
        };
        delete kitsuParams.page;

        return api.get(pathUrl, { params: kitsuParams });
    },

    getAnimeById: (id: string) => api.get(`${pathUrl}/${id}`),

    getAnimeByName: (searchTerm: string, params: IParams = initialParams) => {
        const kitsuParams = {
            ...params,
            "page[limit]": params.page?.limit,
            "page[offset]": params.page?.offset,
            "page[cursor]": params.page?.cursor,
            "filter[text]": searchTerm,
        };
        delete kitsuParams.page;

        console.log('SEARCH', searchTerm)

        // 👇 Add `paramsSerializer` to prevent incorrect encoding of `[]`
        return api.get(pathUrl, {
            params: kitsuParams,
            paramsSerializer: (params) => {
                return Object.entries(params)
                    .map(([key, value]) => {
                        if (value === undefined || value === null) return "";
                        return `${key}=${encodeURIComponent(value)}`;
                    })
                    .join("&");
            },
        });
    },

    getAnimesByCategory: (categoryId: string, params: IParams = initialParams) => {
        const kitsuParams = {
            ...params,
            "page[limit]": params.page?.limit,
            "page[offset]": params.page?.offset,
            "page[cursor]": params.page?.cursor,
            "filter[categories]": categoryId,
        };
        delete kitsuParams.page;

        return api.get(pathUrl, {
            params: kitsuParams,
            paramsSerializer: (params) => {
                return Object.entries(params)
                    .map(([key, value]) => {
                        if (value === undefined || value === null) return "";
                        return `${key}=${encodeURIComponent(value)}`;
                    })
                    .join("&");
            },
        });
    },
};

export default animeService;