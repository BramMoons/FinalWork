/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.MODEL;

/**
 *
 * @author BramLaptop
 */
public class dier {
    
    private int dierId;
    private String soort;
    private String ras;
    private int grootte;
    private String kleur;
    private String karakter;
    private String geslacht;
    private int leeftijd;
    private String photoPath;

    public int getDierId() {
        return dierId;
    }

    public void setDierId(int dierId) {
        this.dierId = dierId;
    }

    public String getSoort() {
        return soort;
    }

    public void setSoort(String soort) {
        this.soort = soort;
    }

    public String getRas() {
        return ras;
    }

    public void setRas(String ras) {
        this.ras = ras;
    }

    public int getGrootte() {
        return grootte;
    }

    public void setGrootte(int grootte) {
        this.grootte = grootte;
    }
    
    public String getKleur() {
        return kleur;
    }
    
    public void setKleur(String kleur) {
        this.kleur = kleur;
    }

    public String getKarakter() {
        return karakter;
    }

    public void setKarakter(String karakter) {
        this.karakter = karakter;
    }

    public String getGeslacht() {
        return geslacht;
    }

    public void setGeslacht(String geslacht) {
        this.geslacht = geslacht;
    }

    public int getLeeftijd() {
        return leeftijd;
    }

    public void setLeeftijd(int leeftijd) {
        this.leeftijd = leeftijd;
    }

    public String getPhotoPath() {
        return photoPath;
    }

    public void setPhotoPath(String photoPath) {
        this.photoPath = photoPath;
    }

    public dier(int dierId, String soort, String ras, int grootte, String karakter, String geslacht, int leeftijd, String photoPath) {
        this.dierId = dierId;
        this.soort = soort;
        this.ras = ras;
        this.grootte = grootte;
        this.karakter = karakter;
        this.geslacht = geslacht;
        this.leeftijd = leeftijd;
        this.photoPath = photoPath;
    }

    public dier() {
    
    }
    
}
