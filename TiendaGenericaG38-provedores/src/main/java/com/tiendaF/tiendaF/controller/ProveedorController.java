package com.tiendaF.tiendaF.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tiendaF.tiendaF.model.Proveedor;
import com.tiendaF.tiendaF.service.api.ProveedorServiceApi;


@RestController
@RequestMapping("/proveedor/api")
@CrossOrigin("*")

public class ProveedorController {
	
	@Autowired
	private ProveedorServiceApi proveedorServiceApi;
	
	@GetMapping(value = "/all")
	public List<Proveedor> getAll(){
		return proveedorServiceApi.getAll();
		
	}
	
	@GetMapping(value = "/find/{nit_proveedor}")
	public Proveedor find(@PathVariable Long nit_proveedor) {
		return proveedorServiceApi.get(nit_proveedor);
	}

	@PostMapping (value = "/save")
	public ResponseEntity<Proveedor> save(@RequestBody Proveedor proveedor){
		Proveedor obj = proveedorServiceApi.save(proveedor);
		return new ResponseEntity<Proveedor>(obj,HttpStatus.OK);
		
	
		
	}
	
	  @PutMapping(value ="/update/{id}")
	  public ResponseEntity<Proveedor> updateTutorial(@PathVariable("id") String id, @RequestBody Proveedor proveedor) {
		  Proveedor obj = proveedorServiceApi.save(proveedor);

			return new ResponseEntity<Proveedor>(obj,HttpStatus.OK);
	 }
	  
	
	@DeleteMapping(value = "/delete/{nit_proveedor}")
	public ResponseEntity<Proveedor> delete(@PathVariable Long nit_proveedor ){
		Proveedor proveedor = proveedorServiceApi.get(nit_proveedor);
		if(proveedor != null) {
			proveedorServiceApi.delete(nit_proveedor);
			
		}else {
			return new ResponseEntity<Proveedor>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Proveedor>(proveedor,HttpStatus.OK);		
}
	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Proveedor proveedor) {
		proveedorServiceApi.save(proveedor);
	}
	
}