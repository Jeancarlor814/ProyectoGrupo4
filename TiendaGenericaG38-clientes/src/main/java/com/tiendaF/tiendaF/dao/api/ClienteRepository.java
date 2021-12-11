package com.tiendaF.tiendaF.dao.api;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tiendaF.tiendaF.model.Cliente;

public interface ClienteRepository  extends MongoRepository <Cliente,Long>{

}
