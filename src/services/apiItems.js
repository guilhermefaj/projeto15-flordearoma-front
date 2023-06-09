import axios from "axios";

function showItem(categories, itemId) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/${categories}/${itemId}`)
    return promise
}

function showRecommendations(categories) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/${categories}`)
    return promise
}

const apiItems = { showItem, showRecommendations }
export default apiItems