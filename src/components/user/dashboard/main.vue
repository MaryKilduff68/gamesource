<template>
	<div class="container">
		<Featured style="padding-top: 0" />
	</div>
</template>

<script setup>
	import AppCarousel from "@/utils/carousel.vue";
	import Featured from "../../home/featured.vue";

	/// ARTICLE STORE
	import { useArticleStore } from "@/stores/articles";
	const articleStore = useArticleStore();

	if (!articleStore.homeArticles) {
		articleStore.getArticles(10);
	}
</script>
