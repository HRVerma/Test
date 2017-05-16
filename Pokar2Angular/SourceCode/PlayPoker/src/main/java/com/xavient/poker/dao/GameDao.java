package com.xavient.poker.dao;

import java.util.List;
import java.util.Map;

import com.xavient.poker.model.Deck;
import com.xavient.poker.model.Game;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.Player;
import com.xavient.poker.model.Story;
import com.xavient.poker.model.User;

public interface GameDao {

	public void createGame(Game game);

	public Game checkGUID(String guid);

	public int savePlayerCredential(String guid, String displayName,
			String Email);

	public Deck fetchDeckDetail(int guid);

	public void createStory(List<Story> story);

	Map<String, String> getDecksBygameId(String gameId);

	public List<Deck> deckList();

	public List<Game> getAllGames(int userId);

	public Game getGame(int guId);

	public void delete(int guId);

	public Game getGameDetail(String guid);

	public User getUser(Integer userId);

	public List<Player> getPlayers(String guid);

	public void editGame(Game game);

	public void editStory(Game game);

	public Login updatePlayerName(User user);

	public Login changePassword(User user);

	public Login deleteAccount(Login login);

}
