package com.xavient.poker.extractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

public class DecksByGameIdExtractor implements
		ResultSetExtractor<Map<String, String>> {

	@Override
	public Map<String, String> extractData(ResultSet rs) throws SQLException,
			DataAccessException {
		Map<String, String> map = new HashMap<String, String>();
		if (rs.next()) {
			map.put("series", rs.getString("Series"));
			map.put("values", rs.getString("Value"));
		}
		return map;
	}
}
