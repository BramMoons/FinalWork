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
public class wandelingen {
    
    private int wandelingId;
    private String lengte;
    private String straat;
    private int straatNr;
    private int postcode;
    private String gemeente;
    private String datum;

    public int getWandelingId() {
        return wandelingId;
    }

    public void setWandelingId(int wandelingId) {
        this.wandelingId = wandelingId;
    }

    public String getLengte() {
        return lengte;
    }

    public void setLengte(String lengte) {
        this.lengte = lengte;
    }

    public String getStraat() {
        return straat;
    }

    public void setStraat(String straat) {
        this.straat = straat;
    }

    public int getStraatNr() {
        return straatNr;
    }

    public void setStraatNr(int straatNr) {
        this.straatNr = straatNr;
    }

    public int getPostcode() {
        return postcode;
    }

    public void setPostcode(int postcode) {
        this.postcode = postcode;
    }

    public String getGemeente() {
        return gemeente;
    }

    public void setGemeente(String gemeente) {
        this.gemeente = gemeente;
    }
    
    public String getDatum() {
        return datum;
    }
    
    public void setDatum(String datum) {
        this.datum = datum;
    }

    public wandelingen(int wandelingId, String lengte, String straat, int straatNr, int postcode, String gemeente, String datum) {
        this.wandelingId = wandelingId;
        this.lengte = lengte;
        this.straat = straat;
        this.straatNr = straatNr;
        this.postcode = postcode;
        this.gemeente = gemeente;
        this.datum = datum;
    }

    public wandelingen() {
    }
    
}
