package com.xavient.poker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.xavient.poker.model.Game;
import com.xavient.poker.model.Player;
import com.xavient.poker.service.GameService;

@Controller
@CrossOrigin()
public class SocketPlayerName {
    private static Logger logger = LoggerFactory.getLogger(PlayerLoginController.class);

    @Autowired
    private GameService gameService;

    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/playerName")
    @SendTo("/topic/playerNameResult")
    public void playerName(Game game) throws Exception {
        logger.info("Invoked SocketPlayerName.playerName() with parameter Game:" +game);
        Thread.sleep(1000); // simulated delay
        simpMessagingTemplate.setUserDestinationPrefix("/app");
        List<Player> players = gameService.fetchAllUserWithGUID(game.getGuid());
        simpMessagingTemplate
                .convertAndSend("/topic/playerNameResult", players);
    }
}
