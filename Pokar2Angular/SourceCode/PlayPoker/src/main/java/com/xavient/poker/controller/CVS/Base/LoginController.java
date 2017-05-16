package com.xavient.poker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xavient.poker.dao.CreateUserDao;
import com.xavient.poker.dao.UserVerifyDao;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.User;
import com.xavient.poker.service.GameService;

@Controller
@CrossOrigin()
public class LoginController {

	@Autowired
	private UserVerifyDao userVerifyDao;

	@Autowired
	private CreateUserDao createUserDao;

	@Autowired
	private GameService gameService;

	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public String index() {
		return "login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = {
			MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Login login(@RequestBody Login login) {
		Login loginRes = new Login();
		loginRes.setUserName(userVerifyDao.verify(login).toString());
		loginRes.setPassword(login.getPassword());
		loginRes.setUserId(userVerifyDao.getUserId(login));
		return loginRes;
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Login create(@RequestBody User user) {
		Login loginRes = new Login();
		loginRes.setUserName(createUserDao.createUser(user).toString());
		return loginRes;
	}

	@RequestMapping(value = "/changePlayerName", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public User changePlayerName(@RequestBody User user) {
		gameService.updatePlayerName(user);
		return user;
	}

	@RequestMapping(value = "/changePassword", method = RequestMethod.POST)
	@ResponseBody
	public Login changePassword(@RequestBody User user) {
		Login loginRes = new Login();
		gameService.changePassword(user);
		return loginRes;
	}

	@RequestMapping(value = "/deleteAccount", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE }, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public Login deleteAccount(@RequestBody Login login) {
		Login loginRes = new Login();
		gameService.deleteAccount(login);
		return loginRes;
	}
}