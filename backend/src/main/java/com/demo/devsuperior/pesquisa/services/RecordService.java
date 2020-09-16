package com.demo.devsuperior.pesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demo.devsuperior.pesquisa.dto.RecordDTO;
import com.demo.devsuperior.pesquisa.dto.RecordInsertDTO;
import com.demo.devsuperior.pesquisa.entities.Game;
import com.demo.devsuperior.pesquisa.entities.Record;
import com.demo.devsuperior.pesquisa.repositories.GameRepository;
import com.demo.devsuperior.pesquisa.repositories.RecordRepository;

@Service
public class RecordService {
	
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);
		
		entity = repository.save(entity);
		return new RecordDTO(entity);
		
	}
	
}
