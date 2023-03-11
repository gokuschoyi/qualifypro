import axios from 'axios'

export const getSessionId = async (data) => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    return axios.post(`${baseUrl}/createSession`, data, {
        withCredentials: false
    })
}

export const getClientDetails = async (data) => {
    const baseUrl = process.env.REACT_APP_BASEURL;
    return axios.post(`${baseUrl}/getSessionDetails`, data, {
        withCredentials: false
    })
}