import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/home/index.vue";
import Signin from "@/components/user/signin.vue";

import Dashboard from "@/components/dashboard/index.vue";
import DashboardMain from "@/components/dashboard/main.vue";
import UserProfile from "@/components/dashboard/pages/user_profile.vue";
import AdminArticles from "@/components/dashboard/admin/articles.vue";
import AdminAddArticle from "@/components/dashboard/admin/add_articles.vue";
import AdminEditArticle from "@/components/dashboard/admin/edit_articles.vue";
import { isAuth, isLoggedIn } from "@/composables/auth";
import NotFound from "@/components/404.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", component: Home },
		{
			path: "/signin",
			name: "signin",
			component: Signin,
			beforeEnter: isLoggedIn,
		},
		{ path: "/dashboard", name: "dashboard", component: Dashboard },
		{
			path: "/dashboard",
			component: Dashboard,
			beforeEnter: isAuth,
			children: [
				{ path: "", component: DashboardMain, name: "dashboard" },
				{
					path: "profile",
					component: UserProfile,
					name: "user_profile",
				},
				{
					path: "articles",
					component: AdminArticles,
					name: "admin_articles",
				},
				{
					path: "articles/add",
					component: AdminAddArticle,
					name: "article_add",
				},
				{
					path: "articles/edit/:id",
					component: AdminEditArticle,
					name: "article_edit",
				},
			],
		},
		{ path: "/:notFound(.*)*", component: NotFound, name: "404" },
	],
});
export default router;
