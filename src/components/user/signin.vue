<template>
	<div class="signin_container">
		<div class="text-center" v-show="userStore.loading">
			<v-progress-circular indeterminate color="primary" />
		</div>

		<Form
			@submit="onSubmit"
			:validation-schema="formSchema"
			v-show="!userStore.loading"
		>
			<h1 v-text="'Sign In'" />

			<div class="form-group">
				<Field name="email" v-slot="{ field, errors, errorMessage }">
					<input
						type="text"
						class="form-control"
						placeholder="Enter your email"
						v-bind="field"
						:class="{ 'is-invalid': errors.length !== 0 }"
					/>
					<div class="input_alert" v-if="errors.length !== 0">
						{{ errorMessage }}
					</div>
				</Field>
			</div>

			<div class="form-group">
				<Field name="password" v-slot="{ field, errors, errorMessage }">
					<input
						type="password"
						class="form-control"
						placeholder="Enter your password"
						v-bind="field"
						:class="{ 'is-invalid': errors.length !== 0 }"
					/>
					<div class="input_alert" v-if="errors.length !== 0">
						{{ errorMessage }}
					</div>
				</Field>
			</div>

			<button
				type="submit"
				class="btn mb-3 btn-block"
				v-text="'Sign In'"
			></button>

			<hr />
			<div
				class="form_swap"
				@click="
					router.push({
						name: 'register',
					})
				"
			>
				<span> I want to <b>Register</b> </span>
			</div>
		</Form>
	</div>
</template>

<script setup>
	import { Field, Form } from "vee-validate";
	import * as yup from "yup";
	import { ref } from "vue";
	import { useRouter } from "vue-router";
	import { useToast } from "vue-toast-notification";
	import { useUserStore } from "@/stores/user";

	const userStore = useUserStore();
	const $toast = useToast();
	const router = useRouter();

	const formSchema = yup.object({
		email: yup
			.string()
			.required("The email is required")
			.email("Not a valid email"),
		password: yup.string().required("The password is required"),
	});

	function onSubmit(values, { resetForm }) {
		// sign in
		userStore.signIn(values);
	}

	// subscribe to error
	userStore.$onAction(({ name, after, onError }) => {
		if (name === "register" || name === "signIn") {
			after(() => {
				$toast.success("Welcome !!");
			});
			onError((error) => {
				$toast.error(error.message);
			});
		}
	});
</script>
