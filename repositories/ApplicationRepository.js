import axios from '@/plugins/axios'

export default {

    query(resource, params) {
        return axios.get(resource, params).catch(error => {
            throw new Error(`ApiService ${error}`)
        })
    },

    get(url, params) {
        return axios.get(`${url}`, params).catch(error => {
            throw new Error(`ApiService ${error}`)
        })
    },

    post(url, params) {
        return axios.post(`${url}`, params)
    },

    update(url, params) {
        return axios.put(`${url}`, params)
    },

    multipleUpdates(url, items) {
        const reflect = p => p.then(
            v => ({
                v,
                status: 'fulfilled'
            }),
            e => ({
                e,
                status: 'rejected'
            })
        )
        const promisesResolved = items.map(item => reflect(this.update(url, item)))

        return axios.all(promisesResolved)
    },

    put(url, params) {
        return axios.put(`${url}`, params)
    },

    delete(url) {
        return axios.delete(url).catch(error => {
            throw new Error(`ApiService ${error}`)
        })
    }

}