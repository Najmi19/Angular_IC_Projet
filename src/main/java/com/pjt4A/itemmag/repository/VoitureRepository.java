package com.pjt4A.itemmag.repository;

import com.pjt4A.itemmag.entity.Moto;
import com.pjt4A.itemmag.entity.Users;
import com.pjt4A.itemmag.entity.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface VoitureRepository extends JpaRepository<Voiture, Integer>, JpaSpecificationExecutor<Voiture>, QuerydslPredicateExecutor<Voiture> {}

