import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl,
  headers: {
    accepts: 'application/json'
  }
})