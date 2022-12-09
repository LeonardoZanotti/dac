/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dac.zanotti.authmicroservice.rest;

import dac.zanotti.auth.model.Login;
import dac.zanotti.authmicroservice.model.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author leonardozanotti
 */
@CrossOrigin
@RestController
public class AuthREST {
    
    @PostMapping("/login")
    ResponseEntity<Usuario> login(@RequestBody Login login) {
        if (login.getLogin().equals(login.getSenha())) {
            Usuario u = new Usuario(1, login.getLogin(), login.getLogin(), "XXX", "ADMIN");
            return ResponseEntity.ok().body(u);
        } else {
            return ResponseEntity.status(401).build();
        }
    }
}
