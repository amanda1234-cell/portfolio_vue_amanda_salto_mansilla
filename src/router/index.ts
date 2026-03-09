import HomeView from "@/pages/home/HomeView.vue";
import AboutView from "@/pages/about/AboutView.vue";
import ContactView from "@/pages/contact/ContactView.vue";
import PortfolioLayout from "@/pages/portfolio/PortfolioLayout.vue";
import ProjectCategoriesView from "@/pages/projects/ProjectCategoriesView.vue";
import KaokaDetailView from "@/pages/projects/KaokaDetailView.vue";
import ProjectDetailView from "@/pages/projects/ProjectDetailView.vue";
import ProjectsView from "@/pages/projects/ProjectsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
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
          path: "proyectos/categorias",
          name: "project-categories",
          component: ProjectCategoriesView,
        },
        {
          path: "proyectos/kaoka",
          name: "project-detail-kaoka",
          component: KaokaDetailView,
        },
        {
          path: "proyectos/:id",
          name: "project-detail",
          component: ProjectDetailView,
          props: true,
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
