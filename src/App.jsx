import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

	return (
		<div className="container">
			<div className="d-flex justify-content-center mt-4">
				<form className="col-md-6" onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3 position-relative">
						<label htmlFor="inputName" className="form-label">
							Name
						</label>
						<input
							{...register("name", { required: "Name is required." })}
							type="text"
							className="form-control"
							id="inputName"
						/>
						<p className="text-danger">{errors.name?.message}</p>
					</div>

					<div className="mb-3 position-relative">
						<label htmlFor="inputEmail" className="form-label">
							Email
						</label>
						<input
							{...register("email", {
								required: "Email is required.",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Invalid email address.",
								},
							})}
							type="email"
							className="form-control"
							id="inputEmail"
						/>
						<p className="text-danger">{errors.email?.message}</p>
					</div>

					<div className="mb-3 position-relative">
						<label htmlFor="inputPassword" className="form-label">
							Password
						</label>
						<input
							{...register("password", {
								required: "Password is required",
								minLength: {
									value: 8,
									message: "Password must be at least 8 characters.",
								},
							})}
							type="password"
							className="form-control"
							id="inputPassword"
						/>
						<p className="text-danger">{errors.password?.message}</p>
					</div>

					<div className="d-grid">
						<input type="submit" className="btn btn-primary" value="Submit" />
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
