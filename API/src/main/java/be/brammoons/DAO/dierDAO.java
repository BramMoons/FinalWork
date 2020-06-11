/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.DAO;

import be.brammoons.MODEL.dier;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.SQLException;

/**
 *
 * @author BramLaptop
 */
public class dierDAO {
    
    public static ArrayList<dier> getDieren() {
        ArrayList<dier> resultaat = new ArrayList<dier>();
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * dier");
            if (mijnResultset != null) {
                while (mijnResultset.next()) {
                    dier huidigDier = converteerHuidigeRijNaarObject(mijnResultset);
                    resultaat.add(huidigDier);
                }
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static dier getDierById(int id) {
        dier resultaat = null;
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * from dier WHERE dierId = ?", new Object[] { id });
            if (mijnResultset != null) {
                mijnResultset.first();
                resultaat = converteerHuidigeRijNaarObject(mijnResultset);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static dier getByKleur(String kleur) {
        dier resultaat = null;
        
        try {
            ResultSet mijnResultset = Database.voerSqlUitEnHaalResultaatOp("SELECT * from dier WHERE kleur = ?", new Object[] { kleur });
            if (mijnResultset != null) {
                mijnResultset.first();
                resultaat = converteerHuidigeRijNaarObject(mijnResultset);
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return resultaat;
    }
    
    public static int voegDierToe(dier nieuwDier) {
        int aantalAangepasteRijen = 0;
        
            try {
                aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("INSERT INTO dier (soort, grootte, kleur, karakter, geslacht, leeftijd, photoPath) VALUES (?,?,?,?,?,?,?,?)", new Object[] { nieuwDier.getSoort(), nieuwDier.getRasId(), nieuwDier.getGrootte(), nieuwDier.getKleur(), nieuwDier.getKarakter(), nieuwDier.getGeslacht(), nieuwDier.getLeeftijd(), nieuwDier.getPhotoPath() });
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        
        return aantalAangepasteRijen;
    }
    
    public static int updateDier(dier nieuwDier) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("UPDATE dier SET soort = ?, rasId = ?, grootte = ?, kleur = ?, karakter = ?, geslacht = ?, leeftijd = ? photoPath = ? WHERE dierId = ?", new Object[] { nieuwDier.getSoort(), nieuwDier.getRasId(), nieuwDier.getGrootte(), nieuwDier.getKleur(), nieuwDier.getKarakter(), nieuwDier.getGeslacht(), nieuwDier.getLeeftijd(), nieuwDier.getPhotoPath() });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;        
    }
    
    public static int verwijderDier(int dierId) {
        int aantalAangepasteRijen = 0;
        
        try {
            aantalAangepasteRijen = Database.voerSqlUitEnHaalAantalAangepasteRijenOp("DELETE FROM dier WHERE dierId = ?", new Object[] { dierId });
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        
        return aantalAangepasteRijen;
    }
    
    private static dier converteerHuidigeRijNaarObject(ResultSet mijnResultset) throws SQLException {
        return new dier(mijnResultset.getInt("dierId"), mijnResultset.getString("soort"), mijnResultset.getInt("rasId"), mijnResultset.getInt("grootte"), mijnResultset.getString("karakter"), mijnResultset.getString("geslacht"), mijnResultset.getInt("leeftijd"), mijnResultset.getString(("photoPath")));
    }
    
}
