import axios from 'axios'

const musicUrl = axios.create({
    baseURL: 'http://localhost:8000'
})

export default musicUrl