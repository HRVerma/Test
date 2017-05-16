package com.xavient.poker.dao.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.xavient.poker.dao.CreateUserDao;
import com.xavient.poker.model.User;
import com.xavient.poker.util.PokerUtility;

@Repository

public class CreateUserDaoImpl implements CreateUserDao {
    private static Logger logger = LoggerFactory.getLogger(CreateUserDaoImpl.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private PokerUtility pokerUtility;

	@Override
	public Boolean createUser(User user) {

		String query = "INSERT INTO user (UserName,FirstName,LastName,Email,Password) VALUES ('"
				+ user.getFirstName()
				+ "','"
				+ user.getLastName()
				+ "','"
				+ user.getPlayerName()
				+ "','"
				+ user.getEmail()
				+ "','"
				+ pokerUtility.sha256(user.getPassword()) + "')";
		int value = 0;
		try {
			value = jdbcTemplate.update(query);
		} catch (DataAccessException e) {
		    logger.info("Exception in Insert records" + e.getMessage());
		    logger.error("Exception in Insert records" + e.getMessage());
		}

		if (value > 0) {
			return true;
		}
		return false;
	}

}
