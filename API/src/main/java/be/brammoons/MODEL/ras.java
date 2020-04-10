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
public class ras {
    
    private int rasId;
    private String rasNaam;
    private String dierSoort;
    
    public int getRasId(){
        return rasId;
    }
    
    public void setRasId(int rasId) {
        this.rasId = rasId;
    }
    
    public String getRasNaam() {
        return rasNaam;
    }
    
    public void setRasNaam(String rasNaam) {
        this.rasNaam = rasNaam;
    }
    
    public String getDierSoort() {
        return dierSoort;
    }
    
    public void setDierSoort(String dierSoort) {
        this.dierSoort = dierSoort;
    }

    public ras(int rasId, String rasNaam, String dierSoort) {
        this.rasId = rasId;
        this.rasNaam = rasNaam;
        this.dierSoort = dierSoort;
    }

    public ras() {
    
    }
    
}
