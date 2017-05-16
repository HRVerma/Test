package com.xavient.poker.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.xavient.poker.dao.GameDao;
import com.xavient.poker.model.Deck;
import com.xavient.poker.model.Game;
import com.xavient.poker.model.GamePlayer;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.Player;
import com.xavient.poker.model.User;
import com.xavient.poker.service.GameService;
import com.xavient.poker.util.GUIDGenerator;


@Service
public class GameServiceImpl implements GameService {

	@Autowired
	private GameDao gameDao;

	@Override
	@Transactional(rollbackFor=Exception.class)
	public void createGame(Game game) {
		game.setGuid(GUIDGenerator.generateRandomUUID());
		gameDao.createGame(game);
		gameDao.createStory(game.getStories());
	}

	@Override
	public Map<String, String> getDecksBygameId(String gameId) {
		return gameDao.getDecksBygameId(gameId);
	}

	//TODO Remove
	@Override
	public String checkGUID(String guid) {

		Game game = gameDao.checkGUID(guid);

		if (null != game && null != game.getStatus() && "" != game.getStatus().trim()) {
			if (game.getStatus().equalsIgnoreCase("ACTIVE"))
				return "ACTIVE";
			else if (game.getStatus().equalsIgnoreCase("OPEN"))
				return "OPEN";
			else
				return "CLOSED";
		}

		return null;
	}

	@Transactional
	public GamePlayer savePlayerCredential(String guid, String playerName, String email) throws Exception {
		
			Game game = gameDao.checkGUID(guid);
			if(game == null){
				throw new Exception("GUID is not exit in DB :: " +guid);
			}
			Deck deck = gameDao.fetchDeckDetail(game.getDeckId());
			int result = gameDao.savePlayerCredential(guid, playerName, email);
			if (result < 1){
				throw new Exception("player credential not save in DB");
			}
				GamePlayer gamePlayer = new GamePlayer();
				gamePlayer.setPlayerName(playerName);
				gamePlayer.setGameStatus(game.getStatus());
				gamePlayer.setGameID(game.getGameId());
				gamePlayer.setDeck(deck);
				gamePlayer.setGuid(guid);
				gamePlayer.setEmail(email);
				return gamePlayer;

	}

	@Override
	public List<Deck> deckList() {
		return gameDao.deckList();
	}

	@Override
	public List<Game> getGames(int userId) {
		List<Game> gameList = gameDao.getAllGames(userId);
		return gameList;
	}

	@Override
	public Game getGame(int guId) {
		Game game = gameDao.getGame(guId);
		return game;
	}

	@Override
	public void delete(int guId) {
		gameDao.delete(guId);
	}

	@Override
	public Game getGameDetail(String guId) {
		return gameDao.getGameDetail(guId);
	}

	//TODO Remove
	@Transactional
	public List<Player> fetchAllUserWithGUID(String guid) {
		Game game = gameDao.checkGUID(guid);
		User user = gameDao.getUser(game.getUserId());
		List<Player> players = gameDao.getPlayers(guid);
		if (null != user) {
			if (null == players) {
				players = new ArrayList<Player>();
			}
			Player player = new Player();
			player.setEmail(user.getEmail());
			player.setGuid(guid);
			player.setPlayerID(user.getUserId());
			player.setName(user.getPlayerName());
			players.add(player);
		}
		return players;
	}
	
	@Override
    @Transactional(rollbackFor=Exception.class)
	public void editGame(Game game) {
		gameDao.editGame(game);
        gameDao.editStory(game);
	}
	
	@Override
	public Login updatePlayerName(User user) {
		gameDao.updatePlayerName(user);
		return null;
	}

	@Override
	public Login changePassword(User user) {
		gameDao.changePassword(user);
		return null;
	}

	@Override
	public Login deleteAccount(Login login) {
		gameDao.deleteAccount(login);
		return null;
	}
}
