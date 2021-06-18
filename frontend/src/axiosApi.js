import axios from 'axios'
import {apiDomain} from './config'

const musicUrl = axios.create({
    baseURL: apiDomain
})

export default musicUrl