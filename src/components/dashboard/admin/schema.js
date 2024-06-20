import * as yup from "yup";

const ArticleSchema = {
	game: yup.string().required("The game is required"),
	title: yup
		.string()
		.required("The title is required")
		.min(5, "Make the title bigger")
		.max(70, "Make the title shorter"),
	excerpt: yup
		.string()
		.required("Summary is required")
		.min(50, "Must be at least 100 characters")
		.max(500, "No more than 500 characters"),
	// editor: yup
	// 	.string()
	// 	.required("Summary is required")
	// 	.min(100, "Must be at least 100 characters"),
	rating: yup
		.string()
		.required("The rating is required")
		.notOneOf(["Select a rating"], "Please select a rating"),
	image: yup
		.string()
		.required("The image is required")
		.url("Please enter a valid Url"),
};

export default ArticleSchema;
