package com.rafaeldeluca.provaconceitofirebasecloudmessage.services;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Service
public class FCMServices {
	
	private Logger logger = LoggerFactory.getLogger(FCMServices.class);
	
	@PostConstruct
	public void initialize() throws IOException {
		FirebaseOptions opcoes = FirebaseOptions.builder().setCredentials(GoogleCredentials.getApplicationDefault()).build();
		FirebaseApp.initializeApp(opcoes);
			}

}
