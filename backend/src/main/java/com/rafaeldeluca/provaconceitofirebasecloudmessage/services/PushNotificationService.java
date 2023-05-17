package com.rafaeldeluca.provaconceitofirebasecloudmessage.services;

import java.util.concurrent.ExecutionException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rafaeldeluca.provaconceitofirebasecloudmessage.dto.PushNotificationRequestDTO;

@Service
public class PushNotificationService {
	
	private Logger logger = LoggerFactory.getLogger(PushNotificationService.class);
	
	@Autowired
	private FCMService fcmService;
	
	public void enviarNotificacao (PushNotificationRequestDTO pushNotificationDTO) {
		
		try {
			fcmService.sendMessageToToken(pushNotificationDTO);
		} catch (InterruptedException erro) {
			// TODO Auto-generated catch block
			erro.printStackTrace();
		} catch (ExecutionException erro) {
			// TODO Auto-generated catch block
			erro.printStackTrace();
		} catch (Exception erro) {
			logger.error(erro.getMessage());
		}
		
		
	}
	
	

}
