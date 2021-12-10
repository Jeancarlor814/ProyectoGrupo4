package com.tiendaF.tiendaF.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.tiendaF.tiendaF.commons.GenericServiceImpl;

import com.tiendaF.tiendaF.dao.api.VentasRepository;
import com.tiendaF.tiendaF.model.Ventas;
import com.tiendaF.tiendaF.service.api.VentasServiceApi;

@Service
public  class VentasServiceImpl extends GenericServiceImpl<Ventas, Long> implements VentasServiceApi{

	@Autowired
	private VentasRepository ventasRepository;
	
	@Override
	public CrudRepository<Ventas, Long> getDao(){
		return ventasRepository;
		
	}
	
	
}
