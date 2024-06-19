<template>
	<header>
		<div class="container header_container">
			<div class="logo">
				<router-link :to="{ name: 'home' }"> GameSource </router-link>
			</div>
			<div>
				<ul>
					<li v-if="!userStore.auth">
						<router-link :to="{ name: 'signin' }">
							Sign in
						</router-link>
					</li>
					<span>
						<li v-if="userStore.auth" @click="userStore.signOut">
							<span> Logout </span>
						</li>
						<li>
							<router-link to="/dashboard" v-if="userStore.auth">
								Dashboard
							</router-link>
						</li>
					</span>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
	import { useUserStore } from "@/stores/user";

	const userStore = useUserStore();
</script>
