/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.DAO;

import be.brammoons.MODEL.asiel;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.SQLException;

/**
 *
 * @author BramLaptop
 */
public class asielDAO {
    
    public static ArrayList<asiel> getAsielen() {
        ArrayList<asiel> resultaat = new ArrayList<asiel>();
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp(("SELECT * FROM asiel"));
            if (mijnResultset != null) {
                while (mijnResultset.next()) {
                    asiel huidigAsiel = converteerHuidigeRijNaarObject(mijnResultset);
                    resultaat.add(huidigAsiel);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static asiel getAsielById(int id) {
        asiel resultaat = null;
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * FROM asiel WHERE asielId = ?", new Object[] { id });
            if (mijnResultset != null) {
                mijnResultset.first();
                resultaat = converteerHuidigeRijNaarObject(mijnResultset);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static int voegAsielToe(asiel nieuwAsiel) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("INSERT INTO asiel ( naam, dieren, straat, straatNr, postcode, gemeente ) VALUES ( ?, ?, ?, ?, ?, ? )", new Object[] { nieuwAsiel.getNaam(), nieuwAsiel.getDieren(), nieuwAsiel.getStraat(), nieuwAsiel.getStraatNr(), nieuwAsiel.getPostcode(), nieuwAsiel.getGemeente() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int updateAsiel(asiel nieuwAsiel) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("UPDATE asiel SET naam = ?, dieren = ?, straat = ?, straatNr = ?, postode = ?, gemeente = ? WHERE asielId = ?", new Object[] { nieuwAsiel.getNaam(), nieuwAsiel.getDieren(), nieuwAsiel.getStraat(), nieuwAsiel.getStraatNr(), nieuwAsiel.getPostcode(), nieuwAsiel.getGemeente(), nieuwAsiel.getAsielId() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int verwijderAsiel(int asielId) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("DELETE FROM asiel WHERE asielId = ?", new Object[] { asielId });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    private static asiel converteerHuidigeRijNaarObject(ResultSet mijnResultset) throws SQLException {
        return new asiel (mijnResultset.getInt("asielid"), mijnResultset.getString("naam"), mijnResultset.getString("dieren"), mijnResultset.getString("straat"), mijnResultset.getInt("straatNr"), mijnResultset.getInt("postcode"), mijnResultset.getString("gemeente"));
    }
    
}
