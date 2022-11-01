import { useState } from "react";
import { useForm } from "react-hook-form";

import "./utils.css";

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
					<div className="mb-3">
						<label htmlFor="inputName" className="form-label">
							Name
						</label>
						<input
							{...register("name", { required: "Name is required." })}
							className={`form-control ${errors.name ? "invalid" : null}`}
							type="text"
							id="inputName"
						/>
						<p className="text-danger">{errors.name?.message}</p>
					</div>

					<div className="mb-3">
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
							className={`form-control ${errors.email ? "invalid" : null}`}
							type="email"
							id="inputEmail"
						/>
						<p className="text-danger">{errors.email?.message}</p>
					</div>

					<div className="mb-3">
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
							className={`form-control ${errors.password ? "invalid" : null}`}
							type="password"
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
