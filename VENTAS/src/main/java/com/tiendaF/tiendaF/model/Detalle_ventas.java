package com.tiendaF.tiendaF.model;

public class Detalle_ventas {
	private int cantidad_producto;
	private int codigo_producto;
	private Long valor_total;
	private Long valor_venta;
	private int valoriva;
	
	public Detalle_ventas(int cantidad_producto, int codigo_producto, Long valor_total, Long valor_venta,
			int valoriva) {
		super();
		this.cantidad_producto = cantidad_producto;
		this.codigo_producto = codigo_producto;
		this.valor_total = valor_total;
		this.valor_venta = valor_venta;
		this.valoriva = valoriva;
	}

	public int getCantidad_producto() {
		return cantidad_producto;
	}

	public void setCantidad_producto(int cantidad_producto) {
		this.cantidad_producto = cantidad_producto;
	}

	public int getCodigo_producto() {
		return codigo_producto;
	}

	public void setCodigo_producto(int codigo_producto) {
		this.codigo_producto = codigo_producto;
	}

	public Long getValor_total() {
		return valor_total;
	}

	public void setValor_total(Long valor_total) {
		this.valor_total = valor_total;
	}

	public Long getValor_venta() {
		return valor_venta;
	}

	public void setValor_venta(Long valor_venta) {
		this.valor_venta = valor_venta;
	}

	public int getValoriva() {
		return valoriva;
	}

	public void setValoriva(int valoriva) {
		this.valoriva = valoriva;
	}
	
	
	
	

}
