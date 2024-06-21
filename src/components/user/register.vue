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
			<h1 v-text="'Register'"></h1>

			<div class="form-group">
				<Field
					name="firstname"
					v-slot="{ field, errors, errorMessage }"
				>
					<input
						type="text"
						class="form-control"
						placeholder="Enter your first name"
						v-bind="field"
						:class="{ 'is-invalid': errors.length !== 0 }"
					/>
					<div class="input_alert" v-if="errors.length !== 0">
						{{ errorMessage }}
					</div>
				</Field>
			</div>

			<div class="form-group">
				<Field name="lastname" v-slot="{ field, errors, errorMessage }">
					<input
						type="text"
						class="form-control"
						placeholder="Enter your last name"
						v-bind="field"
						:class="{ 'is-invalid': errors.length !== 0 }"
					/>
					<div class="input_alert" v-if="errors.length !== 0">
						{{ errorMessage }}
					</div>
				</Field>
			</div>

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
				v-text="'Register'"
			></button>

			<hr />
			<div
				class="form_swap"
				@click="
					router.push({
						name: 'signin',
					})
				"
			>
				<span> I want to <b>Sign in</b> </span>
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
		firstname: yup.string().required("First name is required"),
		lastname: yup.string().required("Last name is required"),

		email: yup
			.string()
			.required("The email is required")
			.email("Not a valid email"),
		password: yup.string().required("The password is required"),
	});

	function onSubmit(values, { resetForm }) {
		userStore.register(values);
	}

	// subscribe to error
	userStore.$onAction(({ name, after, onError }) => {
		if (name === "register") {
			after(() => {
				$toast.success("Welcome !!");
			});
			onError((error) => {
				$toast.error(error.message);
			});
		}
	});
</script>
