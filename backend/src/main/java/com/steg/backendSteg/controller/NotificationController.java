package com.steg.backendSteg.controller;


import com.steg.backendSteg.service.NotificationService;
import com.steg.backendSteg.domain.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:4200/")

@RequestMapping("/steg")
public class NotificationController {

    private final NotificationService notificationService;

    @Autowired
    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/sendEmail")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        notificationService.envoyerEmail(emailRequest.getDestinataire(), emailRequest.getSujet(), emailRequest.getContenu());
        return "E-mail envoyé avec succès.";
    }
}

