package com.demo.devsuperior.pesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.devsuperior.pesquisa.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
