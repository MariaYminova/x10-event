import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "registration-page",
      component: () => import("@/views/RegistrationPage.vue"),
    },
    {
      path: "/event-flag",
      name: "event-flag",
      component: () => import("../views/EventFlag.vue"),
    },
    {
      path: "/account-page",
      name: "account-page",
      component: () => import("../views/AccountPage.vue"),
    },
    {
      path: "/main-page",
      name: "main-page",
      component: () => import("../views/MainPage.vue"),
    },
    {
      path: "/creation-event-page",
      name: "creation-event-page",
      component: () => import("../views/CreationEventPage.vue"),
    },
    {
      path: "/search-contacts-page",
      name: "search-contacts-page",
      component: () => import("../views/SearchContactsPage.vue"),
    },
    {
      path: "/catalog-event",
      name: "catalog-event",
      component: () => import("../views/CatalogEvent.vue"),
    },
    {
      path: "/rating-page",
      name: "rating-page",
      component: () => import("../views/RatingPage.vue"),
    },
    {
      path: "/viewing-profile",
      name: "viewing-profile",
      component: () => import("../views/ViewingProfile.vue"),
    },
   
  ],
});

export default router;
