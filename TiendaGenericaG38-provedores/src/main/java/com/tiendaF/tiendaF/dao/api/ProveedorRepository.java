package com.tiendaF.tiendaF.dao.api;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tiendaF.tiendaF.model.Proveedor;

public interface ProveedorRepository  extends MongoRepository <Proveedor,Long>{

}
