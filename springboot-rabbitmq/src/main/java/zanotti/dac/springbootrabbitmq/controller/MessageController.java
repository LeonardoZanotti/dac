/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package zanotti.dac.springbootrabbitmq.controller;

/**
 *
 * @author leonardozanotti
 */
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import zanotti.dac.springbootrabbitmq.publisher.RabbitMQProducer;

@RestController
@RequestMapping("/api/v1")
public class MessageController {

    private final RabbitMQProducer producer;

    public MessageController(RabbitMQProducer producer) {
        this.producer = producer;
    }

    // http://localhost:8080/api/v1/publish
    @PostMapping("/publish")
    public ResponseEntity<String> sendMessage(@RequestBody Map<String, String> body){
        producer.sendMessage(body.get("message"));
        return ResponseEntity.ok("Message sent to RabbitMQ ...");
    }
}