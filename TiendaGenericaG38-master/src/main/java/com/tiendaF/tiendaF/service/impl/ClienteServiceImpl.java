package com.tiendaF.tiendaF.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.tiendaF.tiendaF.commons.GenericServiceImpl;

import com.tiendaF.tiendaF.dao.api.ClienteRepository;
import com.tiendaF.tiendaF.model.Cliente;
import com.tiendaF.tiendaF.service.api.ClienteServiceApi;

@Service
public  class ClienteServiceImpl extends GenericServiceImpl<Cliente, Long> implements ClienteServiceApi{

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Override
	public CrudRepository<Cliente, Long> getDao(){
		return clienteRepository;
		
	}
	
	
}
