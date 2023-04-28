import axios from "axios";

function showItem(itemId) {
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/Perfumaria/${itemId}`)
    return promise
}

const apiItems = { showItem }
export default apiItems