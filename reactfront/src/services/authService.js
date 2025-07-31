import axios from "axios";

const urlAPI = 'http://localhost:8000/api'

export async function loginRequest(email, password) {
    try {
        if(email !== "" & password !== ""){
            const res = await axios.post(`${urlAPI}/login`, {
                email, 
                password
            });
            console.log(`Resuttados del login ${res}`);
            return { ok: true, user: res.data.user, token: res.data.token };
        }        
        else {
            const message = 'Ambos compos son obligatorios';
            return { ok: false, message }
        }
    } catch (error) {
        const message = error.response?.data?.error || 'Error de red';
        return { ok: false, message }
    }
}

export async function registerRequest(name, email, password, password_confirmation) {
    try {
        if(name !== "" & email !== "" & password !== "") {
            const res = await axios.post(`${urlAPI}/register`, {
                name,
                email,
                password,
                password_confirmation
            });
            console.log(`Resutaldo de la petición: ${res}`);
            const message = 'Usuarios registrado';
            return { ok: true, message}
        } else {
            const message = 'Los campos estan vacios';
            return { ok: false, message }
        }
    } catch (error) {
        const message = error.response?.data?.error || 'Error de red';
        return { ok: false, message }
    }
}