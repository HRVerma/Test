package com.xavient.poker.extractor;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.xavient.poker.model.Game;

public class GameRowMapper implements RowMapper<Game> {

	@Override
	public Game mapRow(ResultSet rs, int rowNum) throws SQLException {

		Game game = new Game();
		game.setAutoFlip(rs.getInt("UserID"));
		game.setCalculateScore(rs.getInt("CalculateScore"));
		game.setAutoFlip(rs.getInt("AutoFlip"));
		game.setCreatedDate(rs.getTimestamp("CreatedDate"));
		game.setDeckId(rs.getInt("DeckID"));
		game.setDescription(rs.getString("Description"));
		game.setEffortEstimation(rs.getInt("EffortEstimation"));
		game.setGameId(rs.getString("gameId"));
		game.setGameName(rs.getString("gameName"));
		game.setGuid(rs.getString("guid"));
		game.setShareVelocity(rs.getInt("shareVelocity"));
		game.setStatus(rs.getString("status"));
		game.setStoryTimer(rs.getInt("storyTimer"));
		game.setTeamVelocity(rs.getInt("teamVelocity"));
		game.setUserId(rs.getInt("userId"));
		game.setVoteAfterReveal(rs.getInt("voteAfterReveal"));

		return game;

	}
}
