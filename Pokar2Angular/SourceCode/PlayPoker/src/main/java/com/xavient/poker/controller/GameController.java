package com.xavient.poker.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.xavient.poker.model.Deck;
import com.xavient.poker.model.Game;
import com.xavient.poker.service.GameService;

@RestController
@CrossOrigin()
public class GameController {

    private static Logger logger = LoggerFactory
            .getLogger(GameController.class);

    @Autowired
    private GameService gameService;

    @RequestMapping(value = { "/createGame" }, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createGame(@RequestBody Game game) {
        gameService.createGame(game);
        logger.info("success");
        return "success";
    }

    @RequestMapping(method = RequestMethod.GET, value = "/getDecksByGameId/{gameId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, String> getDecksByGameId(@PathVariable String gameId) {
        logger.info("getDecksByGameId:" + gameId);
        return gameService.getDecksBygameId(gameId);
    }

    @RequestMapping(value = { "/getDecks" }, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Deck> getDeckList() {
        logger.info("getDeckList");
        return gameService.deckList();
    }

    @RequestMapping(value = { "/getGames/{userId}" }, method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
    public List<Game> getGames(@PathVariable int userId) {
        logger.info("getGames:" + userId);
        return gameService.getGames(userId);
    }

    @RequestMapping(value = { "/getGame/{guId}" }, method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Game getGame(@PathVariable int guId) {
        logger.info("get:" + guId);
        return gameService.getGame(guId);
    }

    @RequestMapping(value = { "/delete/{guId}" }, method = RequestMethod.DELETE, consumes = MediaType.APPLICATION_JSON_VALUE)
    public int update(@PathVariable int guId) {
        gameService.delete(guId);
        logger.info("Deleted");
        return 1;
    }

    @RequestMapping(value = { "/getGameDetail" }, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Game getGameDetail(@RequestParam String guId) {
        logger.info("getGameDetail:" + guId);
        return gameService.getGameDetail(guId);
    }

    @RequestMapping(value = { "/editGame" }, method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String editGame(@RequestBody Game game) {
        gameService.editGame(game);
        logger.info("success");
        return "success";
    }
}
