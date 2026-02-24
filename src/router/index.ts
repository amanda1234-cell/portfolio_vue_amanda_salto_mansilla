import HomeView from "@/pages/home/HomeView.vue";
import AboutView from "@/pages/about/AboutView.vue";
import ContactView from "@/pages/contact/ContactView.vue";
import PortfolioLayout from "@/pages/portfolio/PortfolioLayout.vue";
import ProjectDetailView from "@/pages/projects/ProjectDetailView.vue";
import ProjectsView from "@/pages/projects/ProjectsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/portfolio",
      component: PortfolioLayout,
      children: [
        {
          path: "",
          redirect: "/portfolio/proyectos",
        },
        {
          path: "proyectos",
          name: "projects",
          component: ProjectsView,
        },
        {
          path: "proyectos/:id",
          name: "project-detail",
          component: ProjectDetailView,
        },
        {
          path: "sobre-mi",
          name: "about",
          component: AboutView,
        },
        {
          path: "contacto",
          name: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});
