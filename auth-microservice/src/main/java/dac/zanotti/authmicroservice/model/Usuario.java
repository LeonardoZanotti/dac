/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dac.zanotti.authmicroservice.model;

import java.io.Serializable;

/**
 *
 * @author leonardozanotti
 */
public class Usuario implements Serializable {
    private int id;
    private String nome;
    private String login;
    private String senha;
    private String perfil;

    public Usuario(int id, String nome, String login, String senha, String perfil) {
        super();
        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.perfil = perfil;
    }

    public Usuario() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getPerfil() {
        return perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }
    
    
}
