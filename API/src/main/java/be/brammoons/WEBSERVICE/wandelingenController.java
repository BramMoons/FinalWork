/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.WEBSERVICE;

import be.brammoons.DAO.wandelingenDAO;
import be.brammoons.MODEL.wandelingen;

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
@RequestMapping("/Wandeling")
public class wandelingenController {
    
    @RequestMapping("/GetAll")
    public ArrayList<wandelingen> getAll() {
        ArrayList<wandelingen> alleWandelingen = wandelingenDAO.getWandelingen();
        return alleWandelingen;
        //aanroepen met '../Wandeling/GetAll'
    }
    
    @RequestMapping("/getById")
    public wandelingen getById(@RequestParam(value = "wandelingId", defaultValue = "1") int wandelingId) {
        return wandelingenDAO.getWandelingById(wandelingId);
        //Aanroepen met '../Wandeling/getById?wandelingId=3'
    }
    
    @RequestMapping(value = "/voegToe", method = RequestMethod.POST)
    public int voegToe(@RequestBody wandelingen nieuweWandeling) {
        return wandelingenDAO.voegWandelingToe(nieuweWandeling);
        //aanroepen met '../Wandeling/voegToe' met json in body
    }
    
    @RequestMapping(value = "/wijzig", method = RequestMethod.POST)
    public int wijzig(@RequestBody wandelingen nieuweWandeling) {
        return wandelingenDAO.updateWandeling(nieuweWandeling);
        //aanroepen met '../Wandeling/wijzig' met json in body
    }
    
    @RequestMapping(value = "/verwijder", method = RequestMethod.POST)
    public int verwijder(@RequestBody MultiValueMap<String, String> parameters) {
        try {
            String wandelingIdAlsString = parameters.getFirst("wandelingId");
            int wandelingId = Integer.parseInt(wandelingIdAlsString);
            return wandelingenDAO.verwijderWandeling(wandelingId);
        } catch (Exception ex) {
            return 0;
        }
        //aanroepen met '../Wandeling/verwijder' met in de body: wandelingId=3
    }
    
}
