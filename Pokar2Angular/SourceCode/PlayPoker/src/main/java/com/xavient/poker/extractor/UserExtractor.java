package com.xavient.poker.extractor;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.xavient.poker.model.User;

public class UserExtractor implements RowMapper<User> {

	@Override
	public User mapRow(ResultSet rs, int rowNum) throws SQLException {
		User user = new User();
		user.setEmail(rs.getString("Email"));
		user.setFirstName(rs.getString("FirstName"));
		user.setLastName(rs.getString("LastName"));
		user.setPlayerName(rs.getString("playerName"));
		user.setUserId(rs.getInt("userId"));

		return user;
	}
}
