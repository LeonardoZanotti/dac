/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dac.zanotti.usuariows.repository;

import dac.zanotti.usuariows.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author leonardozanotti
 */
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    public Usuario findByLogin(String login);
    
    @Query("from Usuario where login = :login and senha = :senha")
    public Usuario findByLoginAndSenha(@Param("login") String login, @Param("senha") String senha);
}
