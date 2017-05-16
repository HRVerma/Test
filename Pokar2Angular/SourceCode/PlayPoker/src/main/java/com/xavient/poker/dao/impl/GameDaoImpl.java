package com.xavient.poker.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.xavient.poker.dao.GameDao;
import com.xavient.poker.extractor.DeckRowMapper;
import com.xavient.poker.extractor.DecksByGameIdExtractor;
import com.xavient.poker.extractor.GameRowMapper;
import com.xavient.poker.extractor.GameStoryResultSetExtractor;
import com.xavient.poker.extractor.UserExtractor;
import com.xavient.poker.model.Deck;
import com.xavient.poker.model.Game;
import com.xavient.poker.model.Login;
import com.xavient.poker.model.Player;
import com.xavient.poker.model.Story;
import com.xavient.poker.model.User;
import com.xavient.poker.util.PokerUtility;

@Repository
public class GameDaoImpl implements GameDao {
    private static Logger logger = LoggerFactory.getLogger(GameDaoImpl.class);

    private static final String CREATE_GAME = "insert into game (userid,guid,GameName,description,teamVelocity"
            + ",shareVelocity,effortEstimation,autoFlip,voteAfterReveal,deckId,createdDate,status,storyTimer,calculateScore) values(?,?,?,?,?,?,?,?,?,?,now(),'OPEN',?,?)";
    private static final String CHECK_GUID = "Select * from game where GUID =? and  status = 'OPEN' || 'ACTIVE' ";
    private static final String SAVE_PLAYER_CREDENTIAL = "insert into player(guid,PlayerName,Email) values (?,?,?)";
    private static final String FETCH_DECK_DETAIL = "Select * from deck where Deckid =?";
    private static final String CREATE_STORY = "insert into story(gameId,storyId,storyTitle,storyDescription,criteria) values((SELECT MAX(gameid) FROM game),?,?,?,?)";
    private static final String FETCH_DECK_LIST = "Select * from deck";
    private static final String GET_GAME_DETAIL = "SELECT * FROM GAME game ,STORY story WHERE game.guid=? AND game.gameid=story.gameid";
    private static final String FETCH_USER = "Select * from user where where userId =?";
    private static final String FETCH_PLAYER = "Select * from player where GUID =?";
    private static final String EDIT_GAME = "update game set GameName=?,description=?,teamVelocity=?,deckId=? where guid=? ";
    // private static final String
    // EDIT_STORY="update story set storyTitle=?,storyDescription=? where gameid=? and storyid=?";
    private static final String EDIT_STORY = "insert into story(gameId,storyId,storyTitle,storyDescription) values(?,?,?,?)";
    private static final String UPDATE_PLAYER_NAME = "update user set userName=? where userid=? ";
    private static final String CHANGE_PASSWORD = "update user set password=? where userid=? ";
    private static final String DELETE_ACCOUNT = "DELETE FROM USER WHERE userid=?";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private PokerUtility pokerUtility;

    @Override
    public Map<String, String> getDecksBygameId(String gameId) {

        Map<String, String> response = null;
        if (!StringUtils.isEmpty(gameId)) {
            String query = "SELECT DK.SERIES,DK.VALUE FROM PLAY_POKER.GAME AS GM INNER JOIN PLAY_POKER.DECK AS DK ON GM.DECKID=DK.DECKID WHERE GM.GAMEID = ? ";
            response = jdbcTemplate.query(query, new DecksByGameIdExtractor(),
                    new String[] { gameId });
        }
        return response;
    }

    @Override
    public void createGame(Game game) {
        jdbcTemplate.update(
                CREATE_GAME,
                new Object[] { game.getUserId(), game.getGuid(),
                        game.getGameName(), game.getDescription(),
                        game.getTeamVelocity(), game.getShareVelocity(),
                        game.getEffortEstimation(), game.getAutoFlip(),
                        game.getVoteAfterReveal(), game.getDeckId(),
                        game.getStoryTimer(), game.getCalculateScore() });
    }

    @Override
    public Game checkGUID(String guid) {
        Game game = null;
        try {
            game = jdbcTemplate.queryForObject(CHECK_GUID,
                    new Object[] { guid }, new GameRowMapper());
        } catch (DataAccessException ex) {

        }
        return game;
    }

    @Override
    public int savePlayerCredential(String guid, String displayName,
            String Email) {

        try {
            int result = jdbcTemplate.update(SAVE_PLAYER_CREDENTIAL,
                    new Object[] { guid, displayName, Email });
            return result;
        } catch (DataAccessException ex) {
            return 0;
        }
    }

    @Override
    public Deck fetchDeckDetail(int deckId) {
        Deck deck = null;
        try {
            deck = jdbcTemplate.queryForObject(FETCH_DECK_DETAIL,
                    new Object[] { deckId }, new DeckRowMapper());
        } catch (DataAccessException ex) {

        }
        return deck;
    }

    @Override
    public void createStory(List<Story> stories) {

        jdbcTemplate.batchUpdate(CREATE_STORY,
                new BatchPreparedStatementSetter() {

                    @Override
                    public void setValues(PreparedStatement ps, int i)
                            throws SQLException {
                        Story story = stories.get(i);
                        ps.setInt(1, i + 1);
                        ps.setString(2, story.getStoryTitle());
                        ps.setString(3, story.getStoryDescription());
                        ps.setString(4, story.getCriteria());
                    }

                    @Override
                    public int getBatchSize() {
                        return stories.size();
                    }
                });

    }

    @Override
    public List<Deck> deckList() {
        List<Deck> deckList = new ArrayList<>();
        deckList = jdbcTemplate.query(FETCH_DECK_LIST, new DeckRowMapper());
        return deckList;

    }

    @Override
    public List<Game> getAllGames(int userId) {

        return jdbcTemplate
                .query("SELECT game.*,decktype,COUNT(story.storyid) storycount FROM game ,story ,deck WHERE game.gameId=story.gameId AND game.deckid=deck.deckid AND game.userId=? GROUP BY game.gameId",
                        new Object[] { userId },
                        new ResultSetExtractor<List<Game>>() {

                            @Override
                            public List<Game> extractData(ResultSet rs)
                                    throws SQLException, DataAccessException {

                                List<Game> list = new ArrayList<Game>();
                                while (rs.next()) {
                                    Game game = new Game();
                                    game.setAutoFlip(rs.getInt("UserID"));
                                    game.setCalculateScore(rs
                                            .getInt("CalculateScore"));
                                    game.setAutoFlip(rs.getInt("AutoFlip"));
                                    game.setCreatedDate(rs
                                            .getTimestamp("CreatedDate"));
                                    game.setDeckId(rs.getInt("DeckID"));
                                    game.setDescription(rs
                                            .getString("Description"));
                                    game.setEffortEstimation(rs
                                            .getInt("EffortEstimation"));
                                    game.setGameId(rs.getString("gameId"));
                                    game.setGameName(rs.getString("gameName"));
                                    game.setGuid(rs.getString("guid"));
                                    game.setShareVelocity(rs
                                            .getInt("shareVelocity"));
                                    game.setStatus(rs.getString("status"));
                                    game.setStoryTimer(rs.getInt("storyTimer"));
                                    game.setTeamVelocity(rs
                                            .getInt("teamVelocity"));
                                    game.setUserId(rs.getInt("userId"));
                                    game.setVoteAfterReveal(rs
                                            .getInt("voteAfterReveal"));
                                    game.setDeckType(rs.getString("decktype"));
                                    game.setStoryCount(rs.getInt("storycount"));
                                    list.add(game);

                                }
                                return list;

                            }

                        });
    }

    @Override
    public Game getGame(int guId) {
        Game game = null;
        try {
            game = jdbcTemplate.queryForObject(CHECK_GUID,
                    new Object[] { guId }, new GameRowMapper());
        } catch (DataAccessException ex) {

        }
        return game;
    }

    @Override
    public void delete(int gameId) {
        try {
            jdbcTemplate.update("delete from story where gameId=?", gameId);
            jdbcTemplate.update("delete from game where gameId=?", gameId);
        } catch (DataAccessException ex) {
            ex.printStackTrace();
        }
    }

    @Override
    public Game getGameDetail(String guId) {

        Game game = jdbcTemplate.query(GET_GAME_DETAIL, new Object[] { guId },
                new GameStoryResultSetExtractor());

        return game;
    }

    @Override
    public User getUser(Integer userId) {
        User user = null;
        try {
            user = jdbcTemplate.queryForObject(FETCH_USER,
                    new Object[] { userId }, new UserExtractor());
            return user;
        } catch (DataAccessException ex) {
            return null;
        }
    }

    @Override
    public List<Player> getPlayers(String guid) {
        List<Player> players = new ArrayList<Player>();
        List<Map<String, Object>> playerRows = jdbcTemplate.queryForList(
                FETCH_PLAYER, guid);
        for (Map row : playerRows) {
            Player player = new Player();
            player.setEmail((String) row.get("Email"));
            player.setGuid((String) row.get("GUID"));
            player.setPlayerID((int) row.get("PlayerID"));
            player.setName((String) row.get("PlayerName"));
            players.add(player);
        }
        return players;
    }

    @Override
    public void editGame(Game game) {
        jdbcTemplate.update(
                EDIT_GAME,
                new Object[] { game.getGameName(), game.getDescription(),
                        game.getTeamVelocity(), game.getDeckId(),
                        game.getGuid() });

    }

    @Override
    public void editStory(Game game) {

        List<Story> stories = game.getStories();
        String storyIdList = "";
        for (Story story : stories) {
            storyIdList = storyIdList + story.getStoryId() + ",";
        }
        storyIdList = storyIdList.substring(0, storyIdList.length() - 1);
        logger.info("storyIdList " + storyIdList);
        String query = "delete from story where gameid='" + game.getGameId()
                + "'";
        logger.info(query);

        jdbcTemplate.update(query);

        jdbcTemplate.batchUpdate(EDIT_STORY,
                new BatchPreparedStatementSetter() {

                    @Override
                    public void setValues(PreparedStatement ps, int i)
                            throws SQLException {
                        Story story = stories.get(i);
                        ps.setString(3, story.getStoryTitle());
                        ps.setString(4, story.getStoryDescription());
                        ps.setString(1, game.getGameId());
                        ps.setInt(2, i + 1);

                    }

                    @Override
                    public int getBatchSize() {
                        return stories.size();
                    }
                });
    }

    @Override
    public Login updatePlayerName(User user) {
        jdbcTemplate.update(UPDATE_PLAYER_NAME,
                new Object[] { user.getPlayerName(), user.getUserId() });
        return null;
    }

    @Override
    public Login changePassword(User user) {
        jdbcTemplate.update(
                CHANGE_PASSWORD,
                new Object[] { pokerUtility.sha256(user.getNewPassword()),
                        user.getUserId() });
        return null;
    }

    @Override
    public Login deleteAccount(Login login) {
        jdbcTemplate.update(DELETE_ACCOUNT, new Object[] { login.getUserId() });
        return null;
    }

}
