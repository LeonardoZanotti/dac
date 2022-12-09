/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dac.zanotti.usuariows.rest;

import dac.zanotti.usuariows.model.Usuario;
import dac.zanotti.usuariows.model.UsuarioDTO;
import dac.zanotti.usuariows.repository.UsuarioRepository;
import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author leonardozanotti
 */
@CrossOrigin
@RestController
public class UsuarioREST {
    @Autowired
    private UsuarioRepository repo;
    @Autowired
    private ModelMapper mapper;
    
    @PostMapping("/usuarios")
    UsuarioDTO inserir(@RequestBody UsuarioDTO usuario) {
        repo.save(mapper.map(usuario, Usuario.class));
        Usuario usu = repo.findByLogin(usuario.getLogin());
        return mapper.map(usu, UsuarioDTO.class);
    }
    
    @GetMapping("/usuarios")
    List<UsuarioDTO> ListarTodos() {
        List<Usuario> lista = repo.findAll();
        return lista.stream().map(e -> mapper.map(e, UsuarioDTO.class)).collect(Collectors.toList());
    }
}
