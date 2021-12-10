package com.tiendaF.tiendaF.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.tiendaF.tiendaF.commons.GenericServiceImpl;
import com.tiendaF.tiendaF.dao.api.ProveedorRepository;
import com.tiendaF.tiendaF.model.Proveedor;
import com.tiendaF.tiendaF.service.api.ProveedorServiceApi;

@Service
public  class ProveedorServiceImpl extends GenericServiceImpl<Proveedor, Long> implements ProveedorServiceApi{

	@Autowired
	private ProveedorRepository proveedorRepository;
	
	@Override
	public CrudRepository<Proveedor, Long> getDao(){
		return proveedorRepository;
		
	}
	
	
}
