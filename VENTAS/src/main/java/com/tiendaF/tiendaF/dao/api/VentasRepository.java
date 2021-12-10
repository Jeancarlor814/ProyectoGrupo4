package com.tiendaF.tiendaF.dao.api;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.tiendaF.tiendaF.model.Ventas;

public interface VentasRepository  extends MongoRepository <Ventas,Long>{

}
