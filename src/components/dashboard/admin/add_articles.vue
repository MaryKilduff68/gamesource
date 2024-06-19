<template>
	<h1>Add Article</h1>
	<hr />
	<Form class="mb-5" @onSubmit="onSubmit">
		<div class="mb-4">
			<Field name="game" v-slot="{ field, errors, errorMessage }">
				<input
					type="text"
					class="form-control"
					placeholder="Enter the name of the game"
					v-bind="field"
					:class="{ 'is-invalid': errors.length !== 0 }"
				/>
				<div class="input_alert" v-if="errors.length !== 0">
					{{ errorMessage }}
				</div>
			</Field>
		</div>
		<div class="mb-4">
			<Field name="title" v-slot="{ field, errors, errorMessage }">
				<input
					type="text"
					class="form-control"
					placeholder="Enter the title of the article"
					v-bind="field"
					:class="{ 'is-invalid': errors.length !== 0 }"
				/>
				<div class="input_alert" v-if="errors.length !== 0">
					{{ errorMessage }}
				</div>
			</Field>
		</div>

		<div class="mb-4">
			<Field name="excerpt" v-slot="{ field, errors, errorMessage }">
				<textarea
					rows="3"
					class="form-control"
					placeholder="Enter a summary"
					v-bind="field"
					:class="{ 'is-invalid': errors.length !== 0 }"
				/>
				<div class="input_alert" v-if="errors.length !== 0">
					{{ errorMessage }}
				</div>
			</Field>
		</div>

		<div class="mb-4">
			<Field
				name="rating"
				value="Select a rating"
				v-slot="{ field, errors, errorMessage }"
			>
				<select
					v-bind="field"
					class="form-select"
					:class="{ 'is-invalid': errors.length !== 0 }"
				>
					<option value="Select a rating">Select an Rating</option>
					<option
						v-for="rating in ratingArray"
						:key="rating"
						:value="rating"
					>
						{{ rating }}
					</option>
				</select>
				<div class="input_alert" v-if="errors.length !== 0">
					{{ errorMessage }}
				</div>
			</Field>
		</div>

		<div class="mb-4">
			<Field name="image" v-slot="{ field, errors, errorMessage }">
				<input
					type="text"
					class="form-control"
					placeholder="Add the source of the image"
					v-bind="field"
					:class="{ 'is-invalid': errors.length !== 0 }"
				/>
				<div class="input_alert" v-if="errors.length !== 0">
					{{ errorMessage }}
				</div>
			</Field>
		</div>

		<v-btn type="submit" varient="outline"> Add Article </v-btn>
	</Form>
</template>

<script setup>
	import { ref } from "vue";
	import { Field, Form } from "vee-validate";

	const ratingArray = [0, 1, 2, 3, 4, 5];

	function submit(values, { resetForm }) {
		console.log(values);
	}
</script>
