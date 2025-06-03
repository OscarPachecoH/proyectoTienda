import axios from "axios"

const urlAPI = 'http://localhost:8000/api';

async function getAllProducts() {
    try {
        const res = await axios.get(urlAPI + '/products')
        return { ok: true, data: res.data }
    } catch (error) {
        const message = error.response?.data?.message || 'Error de red'
        return { ok: false, message }
    }
}

export default {
    getAllProducts
}