package com.pjt4A.itemmag.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Data
public class Voiture {
    @javax.persistence.Id
    @Column
    @NotNull(message="{NotNull.Vehicle.desc}")
    private Integer Id;

    @Column
    private String description;

    @Column
    @NotNull(message="{NotNull.Vehicle.prix}")
    private double prix;
}
