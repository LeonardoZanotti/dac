package com.example.login.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.login.model.Login;
import com.example.login.model.Usuario;

@CrossOrigin
@RestController
public class UsuarioREST {
	public static List<Usuario> lista = new ArrayList<>();
	@PostMapping("/login")
	Usuario login(@RequestBody Login login) {
		Usuario usuario = (Usuario) lista.stream().filter(user -> user.getLogin().equals(login.getLogin()) && user.getSenha().equals(login.getSenha())).findAny().orElse(null);
		return usuario;		
	}
	
	@GetMapping("/login")
	List<Usuario> listarTodos() {
		return lista;
	}
	
	static {
		lista.add(new Usuario(1, "administrador", "admin", "admin", "ADMIN"));
		lista.add(new Usuario(2, "gerente", "gerente", "gerente", "GERENTE"));
		lista.add(new Usuario(3, "funcionário", "func", "func", "FUNC"));
	
	}
}
