package com.xavient.poker.dao;

import com.xavient.poker.model.Login;

public interface UserVerifyDao {

	public Boolean verify(Login login);

	public int getUserId(Login login);
}
