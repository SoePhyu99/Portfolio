import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().min(1, "Required Email").email("Invalid Email"),
	message: z
		.string()
		.min(10, { message: "Message must contain at least 10 characters." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
	let {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	return (
		<form
			onSubmit={handleSubmit(() => console.log(""))}
			className="contact-form text-left"
		>
			<label className="form-label mt-1 d-block" htmlFor="name">
				Name
			</label>
			<input
				{...register("name")}
				type="text"
				className="form-input p-1 font-sm"
				placeholder="Your Name"
				id="name"
			/>
			{errors.name && (
				<p className="text-danger text-small">{errors.name?.message}</p>
			)}
			<label className="form-label mt-1 d-block" htmlFor="email d-block">
				Email
			</label>
			<input
				{...register("email")}
				className="form-input p-1 font-sm"
				type="text"
				placeholder="Your Email"
				id="email"
			/>
			{errors && (
				<p className="text-danger text-small">
					{errors.email?.message}
				</p>
			)}
			<label className="form-label mt-1 d-block" htmlFor="message">
				Message
			</label>
			<textarea
				{...register("message")}
				name="message"
				id="message"
				placeholder="Type Message Here"
				className="form-input area-input p-1 font-sm"
				rows={5}
			></textarea>
			{errors && (
				<p className="text-danger text-small mb-1">
					{errors.message?.message}
				</p>
			)}
			<button disabled={!isValid} className="btn btn-stretch btn-primary">
				Send
			</button>
		</form>
	);
};

export default Form;
