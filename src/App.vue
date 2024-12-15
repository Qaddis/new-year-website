<script setup lang="ts">
import { RouterView } from "vue-router"

import AppHeader from "./components/AppHeader.vue"
</script>

<template>
	<app-header />

	<main class="main">
		<router-view />
	</main>
</template>

<style scoped lang="scss">
.main {
	margin-top: 70px;
}
</style>
