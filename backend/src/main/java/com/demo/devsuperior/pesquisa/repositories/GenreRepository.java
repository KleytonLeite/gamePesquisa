package com.demo.devsuperior.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.devsuperior.pesquisa.entities.Genre;

public interface GenreRepository extends JpaRepository<Genre, Long> {

}
