import React, {useState}  from "react";
import "../../styles/register.css";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {

	const [data, setData] = useState({
		full_name: "",
		email: "",
		agenda_slug: "rubengargu",
		address: "",
		phone: ""
	});
	const navigate = useNavigate()


	const handleSubmit = (event) => {
		event.preventDefault()

		fetch ("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"content-Type": "application/json"
			}
		})
		.then ((response) => response.json())
		.catch (error => console.error("error:", error))
		.then ((response) => navigate("/"))
	}
	return (
		<div className="container form_box">
			<form onSubmit={handleSubmit}>
				<div className="row">
					<div className="col-11 col-md-11 col-sm-10">
						<label htmlFor="name" className="form-label">Nombre</label>
						<input type="text" className="form-control" id="full_name" placeholder="Nombre" onChange={(event) => {
							setData({...data, full_name: event.target.value})
						}}/>
					</div>
				</div>
				<div className="row">
					<div className="col-11 col-md-11 col-sm-10">
						<label htmlFor="email" className="form-label">Email</label>
						<input type="email" className="form-control" id="email" placeholder="@" onChange={(event) => {
							setData({...data, email: event.target.value})
						}}/>
					</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-sm-5">
						<label htmlFor="adress" className="form-label">Address</label>
						<input type="text" className="form-control" id="address" placeholder="Address" onChange={(event) => {
							setData({...data, address: event.target.value})
						}}/>
					</div>
					<div className="col-5 col-md-5 col-sm-5">
						<label htmlFor="phone" className="form-label">Numero de telefono</label>
						<input type="number" className="form-control" id="phone" placeholder="Telefono" onChange={(event)=> {
							setData({...data, phone: event.target.value})
						}}/>
					</div>
				</div>
				<div className="row-final">
					<Link to="/">
						<button className="back_register">Volver atras</button>
					</Link>	
					<button className="btn_save" type="submit"> Guardar </button>
				</div>
			</form>
		</div>
	);
};