/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.WEBSERVICE;

import be.brammoons.DAO.asielDAO;
import be.brammoons.MODEL.asiel;

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
@RequestMapping("/Asiel")
public class asielController {
    
    @RequestMapping("/GetAll")
    public ArrayList<asiel> getAll() {
        ArrayList<asiel> alleAsielen = asielDAO.getAsielen();
        return alleAsielen;
        //aanroepen met '../Asiel/GetAll'
    }
    
    @RequestMapping("/GetById")
    public asiel getById(@RequestParam(value= "asielId", defaultValue = "1") int asielId) {
        return asielDAO.getAsielById(asielId);
        //aanroepen met '../Asiel/GetById?asiedId=3'
    }
    
    @RequestMapping(value = "/voegToe", method = RequestMethod.POST)
    public int voegToe(@RequestBody asiel nieuwAsiel) {
        return asielDAO.voegAsielToe(nieuwAsiel);
        //aanroepen met '../Asiel/voegToe' met json in body
    }
    
    @RequestMapping( value = "/wijzig", method = RequestMethod.POST )
    public int wijzig(@RequestBody asiel nieuwAsiel) {
        return asielDAO.updateAsiel(nieuwAsiel);
        //aanroepen met '../Asiel/wijzig' met json in de body
    }
    
    @RequestMapping( value = "/verwijder", method = RequestMethod.POST )
    public int verwijder(@RequestBody MultiValueMap<String, String> parameters) {
        try {
            String asielIdAlsString = parameters.getFirst("asielid");
            int asielId = Integer.parseInt(asielIdAlsString);
            return asielDAO.verwijderAsiel(asielId);
        } catch (Exception ex) {
            return 0;
        }
        //aanroepen met '../Asiel/verwijder' met in de body: asielId = 3
    }
    
}
