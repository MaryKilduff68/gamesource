import { createRouter, createWebHistory } from "vue-router";
import { isAuth, isLoggedIn } from "@/composables/auth";

import Home from "@/components/home/index.vue";
import SignIn from "@/components/user/signin.vue";
import NotFound from "@/components/404.vue";
import Register from "@/components/user/register.vue";
import Dashboard from "@/components/user/dashboard/index.vue";
import DashboardMain from "@/components/user/dashboard/main.vue";
import UserProfile from "@/components/user/dashboard/pages/user_profile.vue";
import AdminArticles from "@/components/user/dashboard/admin/articles.vue";
import AdminAddArticle from "@/components/user/dashboard/admin/add.vue";
import AdminEditArticle from "@/components/user/dashboard/admin/edit.vue";
import Article from "../components/home/articles/article.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", name: "home", component: Home },
		{ path: "/article/:id", component: Article, name: "article" },
		{
			path: "/register",
			name: "register",
			component: Register,
		},
		{
			path: "/signin",
			name: "signin",
			component: SignIn,
			beforeEnter: isLoggedIn,
		},
		{
			path: "/user/dashboard",
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
					name: "admin_add",
				},
				{
					path: "articles/edit/:id",
					component: AdminEditArticle,
					name: "admin_edit",
				},
			],
		},

		{ path: "/:notFound(.*)*", component: NotFound, name: "404" },
	],
});

export default router;
