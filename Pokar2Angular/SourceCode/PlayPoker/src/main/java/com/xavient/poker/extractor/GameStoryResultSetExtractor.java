package com.xavient.poker.extractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;

import com.xavient.poker.model.Game;
import com.xavient.poker.model.Story;

public class GameStoryResultSetExtractor implements ResultSetExtractor<Game> {

	@Override
	public Game extractData(ResultSet rs) throws SQLException,
			DataAccessException {
		List<Story> storyList = new ArrayList<>();
		Story story = null;
		Game game = new Game();
		boolean flag = true;

		while (rs.next()) {
			if (flag) {
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
				flag = false;

			}

			story = new Story();
			story.setCriteria(rs.getString("criteria"));
			story.setStoryDescription(rs.getString("StoryDescription"));
			story.setStoryId(rs.getInt("StoryId"));
			story.setStoryTitle(rs.getString("StoryTitle"));
			story.setGameId(rs.getInt("GameId"));
			storyList.add(story);
			game.setStories(storyList);
		}
		return game;
	}
}
