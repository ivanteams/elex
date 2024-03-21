package com.soltel.elex.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.soltel.elex.models.TiposExpedienteModel;
import com.soltel.elex.services.TiposExpedienteService;

@RestController
@RequestMapping("/tipos_expediente")
public class TiposExpedienteController {
    @Autowired
    private TiposExpedienteService servicioTipo;

    @GetMapping("/consultar")
    public List<TiposExpedienteModel> dameTiposExpediente() {
        return servicioTipo.consultarTipos();
    }

    @PostMapping("/insertar/{materia}")
    public TiposExpedienteModel insertarTipo(@PathVariable String materia) {
        TiposExpedienteModel tipo = new TiposExpedienteModel();
        tipo.setMateria(materia);
        return servicioTipo.insertarTipo(tipo);
    }

    @PutMapping("/actualizar/{id}/{materia}")
    public ResponseEntity<?> actualizarTipo(@PathVariable int id, @PathVariable String materia) {
        Optional<TiposExpedienteModel> tipo = servicioTipo.obtenerTipoPorId(id);
        if (tipo.isPresent()) {
            TiposExpedienteModel tipoActualizado = tipo.get();
            tipoActualizado.setMateria(materia);
            TiposExpedienteModel guardaTipo = servicioTipo.actualizarTipo(tipoActualizado);
            return ResponseEntity.ok(guardaTipo);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Tipo no encontrado");
        }
    }

    // Otra forma de hacerlo...
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<Void> borrarTipo(@PathVariable int id) {
        return servicioTipo.obtenerTipoPorId(id)
                .map(tipo -> {
                    servicioTipo.borrarTipo(id);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
