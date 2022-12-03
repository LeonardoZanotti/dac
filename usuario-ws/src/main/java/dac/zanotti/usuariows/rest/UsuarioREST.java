/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dac.zanotti.usuariows.rest;

import dac.zanotti.usuariows.model.Usuario;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author leonardozanotti
 */
@CrossOrigin
@RestController
public class UsuarioREST {
    public static List<Usuario> lista = new ArrayList<>();
    
    @GetMapping("/usuarios")
    public List<Usuario> obterTodosUsuarios() {
        return lista;
    }

    @GetMapping("/usuarios/{id}")
    public Usuario obterTodosUsuarios(@PathVariable("id") int id) {
        return (Usuario) lista.stream().filter(u -> u.getId() == id).findAny().orElse(null);
    }  
    
    @PostMapping("/usuarios")
    public Usuario inserirUsuario(@RequestBody Usuario usuario) {
        Usuario u = lista.stream().max(Comparator.comparing(Usuario::getId)).orElse(null);
        usuario.setId(u == null ? 1 : u.getId() + 1);
        lista.add(usuario);
        return usuario;
    }
    
    @PutMapping("/usuarios/{id}")
    public Usuario alterarUsuario(@PathVariable("id") int id, @RequestBody Usuario usuario) {
        Usuario u = lista.stream().filter(user -> user.getId() == id).findAny().orElse(null);
        if (u != null) {
            u.setNome(usuario.getNome());
            u.setLogin(usuario.getLogin());
            u.setSenha(usuario.getSenha());
            u.setPerfil(usuario.getPerfil());
        }
        return u;
    }
    
    @DeleteMapping("/usuarios/{id}")
    public Usuario removerUsuario(@PathVariable("id") int id) {
        Usuario u = lista.stream().filter(user -> user.getId() == id).findAny().orElse(null);
        if (u != null) lista.removeIf(usuario -> usuario.getId() == id);
        return u;
    }
    
    
    static {
        lista.add(new Usuario(1, "admin", "admin", "admin", "ADMIN"));
        lista.add(new Usuario(2, "gerente", "gerente", "gerente", "GERENTE"));
        lista.add(new Usuario(3, "func", "func", "func", "FUNC"));
    }
}
