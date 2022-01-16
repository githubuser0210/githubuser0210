import Vue from "vue";
import VueRouter from "vue-router";
import Web from "../views/Web.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Web",
    component: Web,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../components/SignUp.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "SignUp" */ "../components/Login.vue"),
  },
  {
    path: "/shopping",
    name: "Shopping",
    component: () =>
      import(/* webpackChunkName: "Shopping" */ "../views/Shopping.vue"),
  },
  {
    path: "/places",
    name: "Places",
    component: () =>
      import(
        /* webpackChunkName: "TouristPlaces" */ "../views/TouristPlaces.vue"
      ),
  },
  {
    path: "/inbox",
    name: "Inbox",
    component: () =>
      import(/* webpackChunkName: "Inbox" */ "../views/Inbox.vue"),
  },
  {
    path: "/sharedwithme",
    name: "Shared with me",
    component: () =>
      import(
        /* webpackChunkName: "SharedWithMe" */ "../views/SharedWithMe.vue"
      ),
  },
  {
    path: "/starred",
    name: "Starred",
    component: () =>
      import(/* webpackChunkName: "Starred" */ "../views/Starred.vue"),
  },
  {
    path: "/recent",
    name: "Recent",
    component: () =>
      import(/* webpackChunkName: "Recent" */ "../views/Recent.vue"),
  },
  {
    path: "/offline",
    name: "Offline",
    component: () =>
      import(/* webpackChunkName: "Offline" */ "../views/Offline.vue"),
  },
  {
    path: "/uploads",
    name: "Uploads",
    component: () =>
      import(/* webpackChunkName: "Uploads" */ "../views/Uploads.vue"),
  },
  {
    path: "/backups",
    name: "Backups",
    component: () =>
      import(/* webpackChunkName: "Backups" */ "../views/Backups.vue"),
  },
  {
    path: "/sliders",
    name: "Sliders",
    component: () =>
      import(/* webpackChunkName: "Backups" */ "../views/Rangers.vue"),
  },
  {
    path: "/date",
    name: "Date Pickers",
    component: () =>
      import(/* webpackChunkName: "Backups" */ "../views/DatePickers.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../views/Products.vue"),
    children: [
      {
        path: "productsdetails",
        name: "Products Details",
        component: () =>
          import(
            /* webpackChunkName: "ProductsDetails" */ "../views/ProductsDetails.vue"
          ),
        children: [
          {
            path: "chip",
            name: "Chip",
            component: () =>
              import(/* webpackChunkName: "Products" */ "../views/Chip.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../components/HelloWorld.vue"),
  },
  {
    path: "/amcharts",
    name: "AmCharts",
    component: () =>
      import(/* webpackChunkName: "Backups" */ "../components/AmCharts.vue"),
  },
  {
    path: "/grid",
    name: "GridLayout",
    component: () =>
      import(/* webpackChunkName: "Backups" */ "../components/GridExample.vue"),
  },
  {
    path: "/parent",
    name: "Parent",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../components/Parent.vue"),
  },
  {
    path: "/child",
    name: "Child",
    component: () =>
      import(/* webpackChunkName: "Products" */ "../components/Child.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
