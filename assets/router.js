import {Router} from '@vaadin/router';

export function initRouter() {
  const router = new Router(document.querySelector("#app"));

  router.setRoutes([
    {
      path: "/",

      component: "home-page",

      action: () => import("./pages/home-page"),
    },

    {
      path: "/sobre",

      component: "sobre-page",

      action: () => import("./pages/sobre-page"),
    },
  ]);

  return router;
}
