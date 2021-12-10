package com.tiendaF.tiendaF.commons;

import java.io.Serializable;
import java.util.List;

public interface GenericServiceApi <T, ID extends Serializable> {
	
	T save (T Entity);
	void delete(ID cedula);
	T get (ID cedula);
	List<T> getAll();

}
