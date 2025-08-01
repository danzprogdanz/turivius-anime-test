import api from "../api"

const pathUrl = "categories"

const categoriesService = {
    getCategories: () => api.get(pathUrl),
}

export default categoriesService;