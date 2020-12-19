import ApplicationRepository from './ApplicationRepository'

export default {
    get(task) {
        let url = `/tasks/${task}`
        return ApplicationRepository.get(url)
    },
    list(params) {
        let url = '/tasks'
        return ApplicationRepository.query(url, params)
    },
    create(params) {
        let url = `/tasks`
        return ApplicationRepository.post(url, {
            title: params.title,
            description: params.description
        })
    },
    update(task, params) {
        let url = `/tasks/${task}`
        return ApplicationRepository.update(url, {
            title: params.title,
            description: params.description,
            task_status_id: params.task_status_id,
        })
    },
    destroy(task) {
        let url = `/tasks/${task}`
        return ApplicationRepository.delete(`${url}`)
    }
}