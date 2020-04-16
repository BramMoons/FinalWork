/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.DAO;

import be.brammoons.MODEL.wandelingen;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.SQLException;

/**
 *
 * @author BramLaptop
 */
public class wandelingenDAO {
    
    public static ArrayList<wandelingen> getWandelingen() {
        ArrayList<wandelingen> resultaat = new ArrayList<wandelingen>();
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * from wandelingen");
            if (mijnResultset != null) {
                while (mijnResultset.next()) {
                    wandelingen huidigeWandeling = converteerHuidigeRijNaarObject(mijnResultset);
                    resultaat.add(huidigeWandeling);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return resultaat;
    }
    
    public static wandelingen getWandelingById(int id) {
        wandelingen resultaat = null;
        
        try{
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * from wandelingen where wandelingId = ?", new Object[] { id });
            if (mijnResultset != null) {
                mijnResultset.first();
                resultaat = converteerHuidigeRijNaarObject(mijnResultset);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static int voegWandelingToe(wandelingen nieuweWandeling) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("INSERT INTO wandelingen (lengte, straat, straatNr, postcode, gemeente, datum) VALUES (?,?,?,?,?,?)", new Object[] { nieuweWandeling.getLengte(), nieuweWandeling.getStraat(), nieuweWandeling.getStraatNr(), nieuweWandeling.getPostcode(), nieuweWandeling.getGemeente(), nieuweWandeling.getDatum() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int updateWandeling(wandelingen nieuweWandeling) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("UPDATE wandelingen SET lengte = ?, straat = ?, straatNr = ?, postcode = ?, gemeente = ?, datum = ? WHERE wandelingId = ?", new Object[] { nieuweWandeling.getLengte(), nieuweWandeling.getStraat(), nieuweWandeling.getStraatNr(), nieuweWandeling.getPostcode(), nieuweWandeling.getGemeente(), nieuweWandeling.getDatum() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int verwijderWandeling(int wandelingId) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("DELEETE FROM wandelingen WHERE wandelingId = ?", new Object[] { wandelingId });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    private static wandelingen converteerHuidigeRijNaarObject(ResultSet mijnResultset) throws SQLException {
        return new wandelingen(mijnResultset.getInt("wandelingId"), mijnResultset.getString("lengte"), mijnResultset.getString("straat"), mijnResultset.getInt("straatNr"), mijnResultset.getInt("postcode"), mijnResultset.getString("gemeente"), mijnResultset.getString("datum"));
    }
    
}
