/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.WEBSERVICE;

import be.brammoons.DAO.dierDAO;
import be.brammoons.MODEL.dier;

import java.util.ArrayList;

import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author BramLaptop
 */
@RestController
@RequestMapping("/Dier")
public class dierController {
    
    @RequestMapping("/GetAll")
    public ArrayList<dier> getAll() {
        ArrayList<dier> alleDieren = dierDAO.getDieren();
        return alleDieren;
        //aanroepen met '../Dier/GetAll'
    }
    
    @RequestMapping("/getById")
    public dier getById(@RequestParam(value = "dierId", defaultValue = "1") int dierId){
        return dierDAO.getDierById(dierId);
        //aanroepen met '../Dier/getById?dierId=3'
    }
    
    @RequestMapping("/getByKleur")
    public dier getByKleur(@RequestParam(value = "kleur", defaultValue = "bruin") String kleur) {
        return dierDAO.getByKleur(kleur);
        //aanroepen met '../Dier/getByKleur?kleur=bruin
    }
    
    @RequestMapping(value = "/voegtoe", method = RequestMethod.POST)
    public int voegToe (@RequestBody dier nieuwDier) {
        return dierDAO.voegDierToe(nieuwDier);
        //aanroepen met '../Dier/voegToe' met json in body
    }
    
    @RequestMapping(value = "/wijzig", method = RequestMethod.POST)
    public int wijzig (@RequestBody dier nieuwDier) {
        return dierDAO.updateDier(nieuwDier);
        //aanroepen met '../Dier/wijzig' met json in body
    }
    
    @RequestMapping(value = "/verwijder", method = RequestMethod.POST)
    public int verwijder (@RequestBody MultiValueMap<String, String> parameters) {
        try {
            String dierIdAlsString = parameters.getFirst("dierID");
            int dierId = Integer.parseInt(dierIdAlsString);
            return dierDAO.verwijderDier(dierId);
        } catch (Exception ex) {
            return 0;
        }
        //aanroepen met '../Dier/verwijder' met in de body: dierId=3
    }
    
}
