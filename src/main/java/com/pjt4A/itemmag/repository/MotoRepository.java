package com.pjt4A.itemmag.repository;

import com.pjt4A.itemmag.entity.Moto;
import com.pjt4A.itemmag.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource()
public interface MotoRepository extends JpaRepository<Moto, Integer>, JpaSpecificationExecutor<Users>, QuerydslPredicateExecutor<Moto> {}
