/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.DAO;

import be.brammoons.MODEL.ras;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.SQLException;

/**
 *
 * @author BramLaptop
 */
public class rasDAO {
    
    public static ArrayList<ras> getRassen() {
        ArrayList<ras> resultaat = new ArrayList<ras>();
        
        try {
            ResultSet mijnResultSet = Database.voerSqlUitEnHaalResultaatOp("SELECT * From ras");
            if (mijnResultSet != null) {
                while (mijnResultSet.next() ) {
                    ras huidigRas = converteerHuidigeRijNaarObject(mijnResultSet);
                    resultaat.add(huidigRas);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static ras getRasById(int id) {
        ras resultaat = null;
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * from ras WHERE rasId = ?", new Object[] { id });
            if (mijnResultset != null) {
                mijnResultset.first();
                resultaat = converteerHuidigeRijNaarObject(mijnResultset);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static int voegRasToe(ras nieuwRas) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("INSERT INTO ras (rasNaam, dierSoort) VALUES (?,?)", new Object[] { nieuwRas.getRasNaam(), nieuwRas.getDierSoort() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int updateRas(ras nieuwRas) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("UPDATE ras SET rasNaam = ?, dierSoort = ? WHERE rasId = ?", new Object[] { nieuwRas.getRasNaam(), nieuwRas.getDierSoort() } );
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static int verwijderRas(int rasId) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("DELETE FROM ras WHERE rasId = ?", new Object[] { rasId } );
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    public static ras converteerHuidigeRijNaarObject(ResultSet mijnResultset) throws SQLException {
        return new ras(mijnResultset.getInt("rasId"), mijnResultset.getString("rasNaam"), mijnResultset.getString("dierSoort"));
    }
    
}
