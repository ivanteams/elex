package com.soltel.elex.services;

import com.soltel.elex.models.TiposExpedienteModel;
import com.soltel.elex.repositories.TiposExpedienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TiposExpedienteService {
	@Autowired
    private TiposExpedienteRepository repository;

    public List<TiposExpedienteModel> consultarTipos() {
        return repository.findAll();
    }

    public TiposExpedienteModel insertarTipo(TiposExpedienteModel tipo) {
        return repository.save(tipo);
    }

    public TiposExpedienteModel actualizarTipo(TiposExpedienteModel tipo) {
        return repository.save(tipo);
    }

    public void borrarTipo(int id) {
        repository.deleteById(id);
    }

    public Optional<TiposExpedienteModel> obtenerTipoPorId(int id) {
        return repository.findById(id);
    }
}
