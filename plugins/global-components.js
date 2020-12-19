import Vue from 'vue'
import PageAction from '@/components/PageAction'
const components = { PageAction }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
