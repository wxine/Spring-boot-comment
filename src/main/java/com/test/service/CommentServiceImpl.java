package com.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService{
	 @Autowired
	 private JdbcTemplate jdbcTemplate;
	
	@Override
	public void add(String content) {
		jdbcTemplate.update("insert into comment(content) values(?)", content);
	}

	@Override
	public void deleteById(int id) {
		jdbcTemplate.update("delete from comment where id = ?", id);
	}

	@Override
	public Integer getAllComments() {
		return jdbcTemplate.queryForObject("select count(1) from comment", Integer.class);
	}
	
	
	
	@Override
	public List getListComments() {
		return jdbcTemplate.queryForList("select * from comment");
	}
	
	@Override
	public List getListCommentsDesc() {
		return jdbcTemplate.queryForList("select * from comment ORDER BY ID DESC");
	}
	
	@Override
	public void deleteAllComments() {
		 jdbcTemplate.update("delete from comment");
	}

	@Override
	public void updateComment(int id, String Ncontent) {
		// TODO Auto-generated method stub
		jdbcTemplate.update("update comment SET content = ? WHERE id = ?",Ncontent,id);
	}


	
	


}
