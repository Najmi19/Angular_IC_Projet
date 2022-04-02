package com.pjt4A.itemmag.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Moto {
    @Id
    @Column
    @NotNull(message="{NotNull.Vehicle.desc}")
    private Integer Id;

    @Column
    private String img;
    @Column
    @NotNull(message="{NotNull.Vehicle.nom}")
    private String nom;

    @Column
    private String model;

    @Column
    private String torqmax;

    @Column
    private String enginedisp;

    @Column
    @NotNull(message="{NotNull.Vehicle.prix}")
    private double prix;
}
