package com.xavient.poker.service;

import java.util.List;
import java.util.Map;

import com.xavient.poker.model.Deck;
import com.xavient.poker.model.Game;
import com.xavient.poker.model.GamePlayer;
import com.xavient.poker.model.Player;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.User;



public interface GameService {
	
    public void createGame(Game game);

    public String checkGUID(String guid);

    public GamePlayer savePlayerCredential(String guid, String displayName,
            String Email) throws Exception;

    public Map<String, String> getDecksBygameId(String gameId);

    public List<Deck> deckList();

    public List<Game> getGames(int userId);

    public Game getGame(int guId);

    public void delete(int guId);
    
    public Game getGameDetail(String guId);
    
    public List<Player> fetchAllUserWithGUID(String guid);
	
	public void editGame(Game game);
	
	public Login updatePlayerName(User user);
    
    public Login changePassword(User user);
    
    public Login deleteAccount(Login login);
}
