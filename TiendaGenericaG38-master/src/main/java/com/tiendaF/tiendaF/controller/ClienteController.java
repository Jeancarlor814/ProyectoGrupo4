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
import com.tiendaF.tiendaF.model.Cliente;
import com.tiendaF.tiendaF.service.api.ClienteServiceApi;

@RestController
@RequestMapping("/cliente/api")
@CrossOrigin("*")

public class ClienteController {
	
	@Autowired
	private ClienteServiceApi clienteServiceApi;
	
	@GetMapping(value = "/all")
	public List<Cliente> getAll(){
		return clienteServiceApi.getAll();
		
	}
	
	@GetMapping(value = "/find/{cedula}")
	public Cliente find(@PathVariable Long cedula) {
		return clienteServiceApi.get(cedula);
	}

	@PostMapping (value = "/save")
	public ResponseEntity<Cliente> save(@RequestBody Cliente cliente){
		Cliente obj = clienteServiceApi.save(cliente);
		return new ResponseEntity<Cliente>(obj,HttpStatus.OK);
		
	
		
	}
	
	@DeleteMapping(value = "/delete/{cedula}")
	public ResponseEntity<Cliente> delete(@PathVariable Long cedula ){
		Cliente cliente = clienteServiceApi.get(cedula);
		if(cliente != null) {
			clienteServiceApi.delete(cedula);
			
		}else {
			return new ResponseEntity<Cliente>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Cliente>(cliente,HttpStatus.OK);		
}
	@PutMapping("/actualizar")
	public void actualizar(@RequestBody Cliente cliente) {
		clienteServiceApi.save(cliente);
	
}
	
}
