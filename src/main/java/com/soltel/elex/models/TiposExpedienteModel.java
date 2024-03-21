package com.soltel.elex.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "tipos_expediente")
public class TiposExpedienteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column (name = "materia")
    private String materia;

    // Constructores
    public TiposExpedienteModel() { }
    
	public TiposExpedienteModel(int id, String materia) {
		super();
		this.id = id;
		this.materia = materia;
	}

	// Getters y setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }
}
