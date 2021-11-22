import axios  from "axios"

const API_FAKE = 'https://60e12a096b689e001788cc72.mockapi.io'
const getUser = () => {
    return axios.get(`${API_FAKE}/User2`).then(result => {
        if (result.status === 200) {
           console.log('success');
            return result.data
        }
    }).catch()
}

const addUser = (params) => {
    return axios.post(`${API_FAKE}/User2`, params).then(result => {
        console.log(result);
    })
}

export const userApi = {
    getUser,
    addUser
}