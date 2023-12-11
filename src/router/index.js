import { createRouter, createWebHistory } from "vue-router";
import QuiZoneView from "../views/QuiZoneView.vue"
import QuizView from "../views/QuizView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizone",
            component: QuiZoneView
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizView

        }
    ]
})

export default router