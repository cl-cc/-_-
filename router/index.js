/*
 * @Descripttion:
 * @version:
 * @Author: 程
 * @Date: 2021-10-28 15:02:15
 * @LastEditors: 程
 * @LastEditTime: 2022-12-01 14:53:04
 */
import { createWebHistory, createRouter } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../src/pages/index.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/resume',
    name: 'resume',
    meta: {
      title: '个人简历',
    },
    component: () => import('@/view/resume.vue'),
  },
  //------
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '个人简历',
    },
    component: () => import('../src/pages/home.vue'),
  },
  {
    path: '/project',
    name: 'project',
    meta: {
      title: '项目经历',
    },
    component: () => import('../src/pages/project.vue'),
  },
  {
    path: '/message',
    name: 'message',
    meta: {
      title: '聊天室',
    },
    component: () => import('../src/pages/message.vue'),
  },
  {
    path: '/pluginCollection',
    name: 'pluginCollection',
    meta: {
      title: '前端工具大全',
    },
    component: () => import('@/view/pluginCollection.vue'),
  },
];
const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes,
});
export default router;
