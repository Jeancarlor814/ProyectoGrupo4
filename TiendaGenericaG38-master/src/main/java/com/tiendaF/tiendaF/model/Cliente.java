package com.tiendaF.tiendaF.model;

import org.springframework.data.annotation.Id;


public class Cliente {
	
	@Id
	private Long cedula;
	private String telefono;
	private String nombre;
	private String correo;
	private String direccion;
	
	
	
	
	
	public Cliente(Long cedula, String telefono, String nombre, String correo, String direccion) {
		super();
		this.cedula = cedula;
		this.telefono = telefono;
		this.nombre = nombre;
		this.correo = correo;
		this.direccion = direccion;
	}
	
	

	public Long getCedula() {
		return cedula;
	}

	public void setCedula(Long cedula) {
		this.cedula = cedula;
	}

	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCorreo() {
		return correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	

	@Override
	public String toString() {
		return "Cliente [cedula" + cedula + ", direccion_cliente=" + direccion
				+ ", email_cliente=" + correo + ", nombre_cliente=" + nombre + ", telefono=" + telefono
				+ "]";

	
	
	
	
	
	}	

}
