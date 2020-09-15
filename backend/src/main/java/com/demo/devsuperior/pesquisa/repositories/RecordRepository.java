package com.demo.devsuperior.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.devsuperior.pesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {

}
