<script setup lang="ts">
import { RouterLink } from "vue-router"
</script>

<template>
	<header class="header">
		<div class="wrapper">
			<h1 class="logo">Счастливого нового года!</h1>

			<nav class="nav">
				<router-link to="/" class="nav__link" active-class="--active">
					Главная
				</router-link>
				<router-link to="/results" class="nav__link" active-class="--active">
					Итоги года
				</router-link>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	padding: 0 25px;
}

.wrapper {
	max-width: 1140px;
	margin: 0 auto;
	padding: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-family: var(--vibes-font);
	font-size: 2.5rem;
	font-weight: bold;
}

.nav {
	display: flex;
	align-items: center;
	column-gap: 20px;

	&__link {
		font-size: 1.15rem;
		font-weight: 500;
		color: var(--text);
		position: relative;
		transition-property: color, opacity, translate;
		transition-duration: 0.25s, 0.15s, 0.15s;

		&:hover {
			color: var(--red);
		}

		&:active {
			translate: 0 1.5px;
			opacity: 0.65;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -3px;
			left: 0;

			display: block;
			width: 100%;
			height: 2px;
			background-color: var(--green);
			border-radius: 2px;
			opacity: 0;
			transition: opacity 0.25s;
		}

		&.--active {
			color: var(--text);
			opacity: 1;
			translate: 0 0;

			&::after {
				opacity: 1;
			}
		}
	}
}
</style>
