package com.tiendaF.tiendaF.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection="ventas")
public class Ventas {
	
	@Id
	private String codigo_venta;
	private Long cedula_cliente;
	private String nombre_cliente;
	private Detalle_ventas[] detalleventas;
	private int ivaventa;
	private Long totalventa;
	private Long valorventa;

	




	public Ventas(Long cedula_cliente, String nombre_cliente, Detalle_ventas[] detalleventas,
			int ivaventa, Long totalventa, Long valorventa) {
		super();
		this.cedula_cliente = cedula_cliente;
		this.nombre_cliente = nombre_cliente;
		this.detalleventas = detalleventas;
		this.ivaventa = ivaventa;
		this.totalventa = totalventa;
		this.valorventa = valorventa;
	}




	public Ventas() {
		
	}




	public Long getCedula_cliente() {
		return cedula_cliente;
	}


	public void setCedula_cliente(Long cedula_cliente) {
		this.cedula_cliente = cedula_cliente;
	}

	public String getCodigo_venta() {
		return codigo_venta;
	}

	public void setCodigo_venta(String codigo_venta) {
		this.codigo_venta = codigo_venta;
	}




	public int getIvaventa() {
		return ivaventa;
	}

	public void setIvaventa(int ivaventa) {
		this.ivaventa = ivaventa;
	}

	public Long getTotalventa() {
		return totalventa;
	}
	public void setTotalventa(Long totalventa) {
		this.totalventa = totalventa;
	}


	public Long getValorventa() {
		return valorventa;
	}


	public void setValorventa(Long valorventa) {
		this.valorventa = valorventa;
	}

	



	public String getNombre_cliente() {
		return nombre_cliente;
	}




	public void setNombre_cliente(String nombre_cliente) {
		this.nombre_cliente = nombre_cliente;
	}




	@Override
	public String toString() {
		return "Ventas [cedula_cliente" + cedula_cliente + ", codigo_venta=" + codigo_venta
				+ ",detalleventas="+detalleventas+",  ivaventa=" + ivaventa + ", totalventa=" + totalventa
				+ ", valorventa="+valorventa+"]";

	
	
	
	
	
	}

	public Detalle_ventas[] getDetalleventas() {
		return detalleventas;
	}

	public void setDetalleventas(Detalle_ventas[] detalleventas) {
		this.detalleventas = detalleventas;
	}

	

}
