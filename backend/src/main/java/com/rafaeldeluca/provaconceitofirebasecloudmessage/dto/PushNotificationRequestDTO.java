package com.rafaeldeluca.provaconceitofirebasecloudmessage.dto;

import java.io.Serializable;

public class PushNotificationRequestDTO implements Serializable  {	
	
	private static final long serialVersionUID = 1L;
	
	private String title;
	private String token;
	private String message;
	
	public PushNotificationRequestDTO () {
		
	}

	public PushNotificationRequestDTO(String title, String token, String message) {
		super();
		this.title = title;
		this.token = token;
		this.message = message;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	
	
	

}
