package com.xavient.poker.model;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Game {

	private Integer userId;
	private String gameId;
	private String guid;
	private String gameName;
	private String description;
	private Integer teamVelocity;
	private Integer shareVelocity;
	private Integer effortEstimation;
	private Integer autoFlip;
	private Integer voteAfterReveal;
	private Integer deckId;

	private Timestamp createdDate;
	// @JsonIgnore
	private String status;
	@JsonIgnore
	private Integer storyTimer;
	@JsonIgnore
	private Integer calculateScore;
	private List<Story> stories;

	private String deckType;

	private Integer storyCount;

	public Integer getStoryCount() {
		return storyCount;
	}

	public void setStoryCount(Integer storyCount) {
		this.storyCount = storyCount;
	}

	/**
	 * @return the userId
	 */
	public Integer getUserId() {
		return userId;
	}

	/**
	 * @param userId
	 *            the userId to set
	 */
	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	/**
	 * @return the gameId
	 */
	public String getGameId() {
		return gameId;
	}

	/**
	 * @param gameId
	 *            the gameId to set
	 */
	public void setGameId(String gameId) {
		this.gameId = gameId;
	}

	/**
	 * @return the guid
	 */
	public String getGuid() {
		return guid;
	}

	/**
	 * @param guid
	 *            the guid to set
	 */
	public void setGuid(String guid) {
		this.guid = guid;
	}

	/**
	 * @return the gameName
	 */
	public String getGameName() {
		return gameName;
	}

	/**
	 * @param gameName
	 *            the gameName to set
	 */
	public void setGameName(String gameName) {
		this.gameName = gameName;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description
	 *            the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the teamVelocity
	 */
	public Integer getTeamVelocity() {
		return teamVelocity;
	}

	/**
	 * @param teamVelocity
	 *            the teamVelocity to set
	 */
	public void setTeamVelocity(Integer teamVelocity) {
		this.teamVelocity = teamVelocity;
	}

	/**
	 * @return the shareVelocity
	 */
	public Integer getShareVelocity() {
		return shareVelocity;
	}

	/**
	 * @param shareVelocity
	 *            the shareVelocity to set
	 */
	public void setShareVelocity(Integer shareVelocity) {
		this.shareVelocity = shareVelocity;
	}

	/**
	 * @return the effortEstimation
	 */
	public Integer getEffortEstimation() {
		return effortEstimation;
	}

	/**
	 * @param effortEstimation
	 *            the effortEstimation to set
	 */
	public void setEffortEstimation(Integer effortEstimation) {
		this.effortEstimation = effortEstimation;
	}

	/**
	 * @return the autoFlip
	 */
	public Integer getAutoFlip() {
		return autoFlip;
	}

	/**
	 * @param autoFlip
	 *            the autoFlip to set
	 */
	public void setAutoFlip(Integer autoFlip) {
		this.autoFlip = autoFlip;
	}

	/**
	 * @return the voteAfterReveal
	 */
	public Integer getVoteAfterReveal() {
		return voteAfterReveal;
	}

	/**
	 * @param voteAfterReveal
	 *            the voteAfterReveal to set
	 */
	public void setVoteAfterReveal(Integer voteAfterReveal) {
		this.voteAfterReveal = voteAfterReveal;
	}

	/**
	 * @return the deckId
	 */
	public Integer getDeckId() {
		return deckId;
	}

	/**
	 * @param deckId
	 *            the deckId to set
	 */
	public void setDeckId(Integer deckId) {
		this.deckId = deckId;
	}

	/**
	 * @return the createdDate
	 */
	public Date getCreatedDate() {
		return createdDate;
	}

	/**
	 * @param createdDate
	 *            the createdDate to set
	 */
	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	/**
	 * @return the status
	 */
	public String getStatus() {
		return status;
	}

	/**
	 * @param status
	 *            the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}

	/**
	 * @return the storyTimer
	 */
	public Integer getStoryTimer() {
		return storyTimer;
	}

	/**
	 * @param storyTimer
	 *            the storyTimer to set
	 */
	public void setStoryTimer(Integer storyTimer) {
		this.storyTimer = storyTimer;
	}

	/**
	 * @return the calculateScore
	 */
	public Integer getCalculateScore() {
		return calculateScore;
	}

	/**
	 * @param calculateScore
	 *            the calculateScore to set
	 */
	public void setCalculateScore(Integer calculateScore) {
		this.calculateScore = calculateScore;
	}

	/**
	 * @return the stories
	 */
	public List<Story> getStories() {
		return stories;
	}

	/**
	 * @param stories
	 *            the stories to set
	 */
	public void setStories(List<Story> stories) {
		this.stories = stories;
	}

	public String getDeckType() {
		return deckType;
	}

	public void setDeckType(String deckType) {
		this.deckType = deckType;
	}

}
