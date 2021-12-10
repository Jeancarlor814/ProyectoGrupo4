package com.tiendaF.tiendaF.commons;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;


public abstract class GenericServiceImpl<T, ID extends Serializable> implements GenericServiceApi<T, ID> {
	
	@Override
	public T save (T entity) {
		return getDao().save(entity);
	}

	@Override
	public void delete(ID nit_proveedor) {
		getDao().deleteById(nit_proveedor);
	}
	
	@Override
	public T get (ID nit_proveedor) {
		Optional<T> obj = getDao().findById(nit_proveedor);
		if (obj.isPresent()){
		    return obj.get();	
		}
		return null;
	}
	
	@Override
	public List<T> getAll(){
		List<T> returnList = new ArrayList<>();
		getDao().findAll().forEach(obj -> returnList.add(obj));
		return returnList;
			
	}
	
	public abstract CrudRepository<T, ID> getDao();
		
	}


