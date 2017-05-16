package com.xavient.poker.dao.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.xavient.poker.dao.UserVerifyDao;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.User;
import com.xavient.poker.util.PokerUtility;

@Repository
public class UserVerifyDaoImpl implements UserVerifyDao {

	private static Logger LOGGER = LoggerFactory.getLogger(UserVerifyDaoImpl.class);

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private PokerUtility pokerUtility;

	@Override
	public Boolean verify(Login login) {
		String verifyQuery = "select * from user where Email=?";
		User user = null;
		try {
			user = jdbcTemplate.queryForObject(verifyQuery,
					new Object[] { login.getUserName() },
					new BeanPropertyRowMapper<User>(User.class));
		} catch (org.springframework.dao.DataAccessException e) {
			LOGGER.error(e.getMessage());
		}

		if (user != null
				&& !user.getEmail().isEmpty()
				&& login.getUserName().equals(user.getEmail())
				&& user.getPassword().equals(
						pokerUtility.sha256(login.getPassword()))) {
			return false;
		}

		return true;
	}

	@Override
	public int getUserId(Login login) {
		String verifyQuery = "select * from user where Email=?";
		User user = null;
		try {
			user = jdbcTemplate.queryForObject(verifyQuery,
					new Object[] { login.getUserName() },
					new BeanPropertyRowMapper<User>(User.class));
		} catch (org.springframework.dao.DataAccessException e) {
			LOGGER.error(e.getMessage());
		}
		if (user == null) {
			return 0;
		}
		return user.getUserId();
	}

}
