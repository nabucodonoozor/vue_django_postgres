import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/components/home.vue'
import Department from '@/components/department.vue'
import Employee from '@/components/employee.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', name: 'home', component: Home},
        { path: '/employee', name: 'employee', component: Employee},
        { path: '/department', name: 'department', component: Department},
    ]
  });

export default router;