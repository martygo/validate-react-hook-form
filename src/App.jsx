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
							{...register("name", { required: "true" })}
							aria-invalid={errors.name ? "true" : "false"}
							type="text"
							className="form-control"
							id="inputName"
						/>
						{errors.name?.type === "required" ? (
							<p className="text-danger">Name is required</p>
						) : null}
					</div>

					<div className="mb-3 position-relative">
						<label htmlFor="inputEmail" className="form-label">
							Email
						</label>
						<input
							{...register("email", { required: true, pattern: /^\S+@\S+$/i })}
							type="email"
							className="form-control"
							id="inputEmail"
						/>
						{errors.email?.type === "required" ? (
							<p className="text-danger">Email is required</p>
						) : null}
						{errors.email?.type === "pattern" ? (
							<p className="text-danger">Email invalid</p>
						) : null}
					</div>

					<div className="mb-3 position-relative">
						<label htmlFor="inputPassword" className="form-label">
							Password
						</label>
						<input
							{...register("password", { required: true, minLength: 8 })}
							type="password"
							className="form-control"
							id="inputPassword"
						/>
						{errors.password?.type === "required" ? (
							<p className="text-danger">Password is required</p>
						) : null}
						{errors.password?.type === "minLength" ? (
							<p className="text-danger">
								Password required on min 8 characters
							</p>
						) : null}
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
