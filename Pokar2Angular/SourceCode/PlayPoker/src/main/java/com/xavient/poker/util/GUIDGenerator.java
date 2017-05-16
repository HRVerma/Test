package com.xavient.poker.util;

import java.util.UUID;

public class GUIDGenerator {
	static String gameString = "GAME_UUID_";



    public static String generateRandomUUID() {
        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
        return gameString.concat(randomUUIDString);
    }
}
