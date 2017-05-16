package com.xavient.poker.extractor;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.xavient.poker.model.Deck;

public class DeckRowMapper implements RowMapper<Deck> {

	@Override
	public Deck mapRow(ResultSet rs, int rowNum) throws SQLException {

		Deck deck = new Deck();
		deck.setDeckId(rs.getInt("DeckId"));
		deck.setDeckType(rs.getString("deckType"));
		deck.setDescription(rs.getString("Description"));
		deck.setSeries(rs.getString("Series"));
		deck.setValue(rs.getString("Value"));

		return deck;
	}
}
