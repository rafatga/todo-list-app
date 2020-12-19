import ApplicationRepository from './ApplicationRepository'

export default {
    list(params) {
        let url = '/statuses'
        return ApplicationRepository.query(url, params)
    },
}