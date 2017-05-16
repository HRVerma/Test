package com.xavient.poker.controller;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xavient.poker.model.GamePlayer;
import com.xavient.poker.model.Player;
import com.xavient.poker.service.GameService;

@Controller
@CrossOrigin()
public class PlayerLoginController {

	private static Logger LOGGER = LoggerFactory.getLogger(PlayerLoginController.class);

	@Autowired
	private GameService gameService;

	@RequestMapping(value = "/playerLogin", method = RequestMethod.POST, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public GamePlayer playerLogin(@RequestBody Player player) {
		LOGGER.info("Welcome PlayerLoginController playerLogin POST");
		if (StringUtils.isBlank(player.getName())
				|| StringUtils.isBlank(player.getEmail())) {
			LOGGER.error("Player name || email id, should not be blank");
			return null;
		}

		try {
			return gameService.savePlayerCredential(player.getGuid(),
					player.getName(), player.getEmail());
		} catch (Exception exception) {
			LOGGER.error("Exception Occurred :: {}", exception.getMessage());
			return null;
		}
	}
}