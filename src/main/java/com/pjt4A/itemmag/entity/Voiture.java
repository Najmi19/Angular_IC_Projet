package com.pjt4A.itemmag.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Voiture {
    @Id
    @Column
    @NotNull(message="{NotNull.Vehicle.id}")
    private Integer Id;

    @Column
    private String img;
    @Column
    @NotNull(message="{NotNull.Vehicle.nom}")
    private String nom;

    @Column
    private String model;

    @Column
    private double mileage;

    @Column
    private String typetransmission;

    @Column
    private double capacity;

    @Column
    private String torqmax;

    @Column
    private double enginedisp;

    @Column
    @NotNull(message="{NotNull.Vehicle.prix}")
    private double prix;
}
