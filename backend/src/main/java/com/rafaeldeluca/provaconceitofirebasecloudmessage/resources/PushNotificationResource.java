package com.rafaeldeluca.provaconceitofirebasecloudmessage.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaeldeluca.provaconceitofirebasecloudmessage.dto.PushNotificationRequestDTO;
import com.rafaeldeluca.provaconceitofirebasecloudmessage.services.PushNotificationService;

@RestController
@RequestMapping(value = "/notifications")
public class PushNotificationResource {

	@Autowired
	private PushNotificationService pushNotificaitonService;

	@PostMapping
	public ResponseEntity<Void> enviarNotificacao(@RequestBody PushNotificationRequestDTO pushNotificationDTO) {

		pushNotificaitonService.enviarNotificacao(pushNotificationDTO);
		return ResponseEntity.noContent().build();
	}

}
