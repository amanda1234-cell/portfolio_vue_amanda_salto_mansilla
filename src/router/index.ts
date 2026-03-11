import HomeView from "@/pages/home/HomeView.vue";
import AboutView from "@/pages/about/AboutView.vue";
import ContactView from "@/pages/contact/ContactView.vue";
import PortfolioLayout from "@/pages/portfolio/PortfolioLayout.vue";
import ProjectCategoriesView from "@/pages/projects/ProjectCategoriesView.vue";
import KaokaDetailView from "@/pages/projects/KaokaDetailView.vue";
import MacbethDetailView from "@/pages/projects/MacbethDetailView.vue";
import CrefadDetailView from "@/pages/projects/CrefadDetailView.vue";
import EnvidiaDetailView from "@/pages/projects/EnvidiaDetailView.vue";
import HuellasDetailView from "@/pages/projects/HuellasDetailView.vue";
import LaLadronaDeLibrosDetailView from "@/pages/projects/LaLadronaDeLibrosDetailView.vue";
import MentecatosDetailView from "@/pages/projects/MentecatosDetailView.vue";
import LoQueNosMueveDetailView from "@/pages/projects/LoQueNosMueveDetailView.vue";
import ProjectDetailView from "@/pages/projects/ProjectDetailView.vue";
import ProjectsView from "@/pages/projects/ProjectsView.vue";
import SobreRuedasDetailView from "@/pages/projects/SobreRuedasDetailView.vue";
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
          path: "proyectos/macbeth",
          name: "project-detail-macbeth",
          component: MacbethDetailView,
        },
        {
          path: "proyectos/crefad",
          name: "project-detail-crefad",
          component: CrefadDetailView,
        },
        {
          path: "proyectos/envidia",
          name: "project-detail-envidia",
          component: EnvidiaDetailView,
        },
        {
          path: "proyectos/huellas",
          name: "project-detail-huellas",
          component: HuellasDetailView,
        },
        {
          path: "proyectos/la-ladrona-de-libros",
          name: "project-detail-la-ladrona-de-libros",
          component: LaLadronaDeLibrosDetailView,
        },
        {
          path: "proyectos/mentecatos",
          name: "project-detail-mentecatos",
          component: MentecatosDetailView,
        },
        {
          path: "proyectos/lo-que-nos-mueve",
          name: "project-detail-lo-que-nos-mueve",
          component: LoQueNosMueveDetailView,
        },
        {
          path: "proyectos/sobre-ruedas",
          name: "project-detail-sobre-ruedas",
          component: SobreRuedasDetailView,
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
