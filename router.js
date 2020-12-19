import Vue from 'vue'
import Router from 'vue-router'
import TaskIndex from '~/pages/task/index'
import TaskCreate from '~/pages/task/create'
import TaskEdit from '~/pages/task/edit'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'task-list',
        component: TaskIndex
      },
      {
        path: '/task',
        component: TaskCreate,
        name: 'task-create'
      },
      {
        path: '/task/:id',
        component: TaskEdit,
        name: 'task-edit'
      }
    ]
  })
}