package com.tiendaF.tiendaF.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tiendaF.tiendaF.model.Ventas;

import com.tiendaF.tiendaF.service.api.VentasServiceApi;

@RestController
@RequestMapping("/ventas/api")
@CrossOrigin("*")

public class VentasController {
	
	@Autowired
	private VentasServiceApi ventasServiceApi;
	
	@GetMapping(value = "/all")
	public List<Ventas> getAll(){
		return ventasServiceApi.getAll();
		
	}
	
	@GetMapping(value = "/find/{cedula_cliente}")
	public Ventas find(@PathVariable Long cedula_cliente) {
		return ventasServiceApi.get(cedula_cliente);
	}

	@PostMapping (value = "/save")
	public ResponseEntity<Ventas> save(@RequestBody Ventas ventas){
		Ventas obj = ventasServiceApi.save(ventas);
		return new ResponseEntity<Ventas>(obj,HttpStatus.OK);
		
	
		
	}
	
	@GetMapping(value = "/delete/{cedula_cliente}")
	public ResponseEntity<Ventas> delete(@PathVariable Long cedula_cliente ){
		Ventas ventas = ventasServiceApi.get(cedula_cliente);
		if(ventas != null) {
			ventasServiceApi.delete(cedula_cliente);
			
		}else {
			return new ResponseEntity<Ventas>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Ventas>(ventas,HttpStatus.OK);		
}
	
}
