import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

import MainPage from "@/views/MainPage.vue"
import ResultsPage from "@/views/ResultsPage.vue"

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "Main", component: MainPage },
	{ path: "/results", name: "Results", component: ResultsPage }
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
