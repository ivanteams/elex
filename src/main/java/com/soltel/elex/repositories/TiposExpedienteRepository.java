package com.soltel.elex.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.soltel.elex.models.TiposExpedienteModel;
import java.util.List;

@Repository
public interface TiposExpedienteRepository extends JpaRepository<TiposExpedienteModel, Integer> {
	
	// Ordena los resultados por el campo 'id'
    List<TiposExpedienteModel> findAllByOrderByIdAsc();
}