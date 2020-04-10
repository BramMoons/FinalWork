/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.WEBSERVICE;

import be.brammoons.DAO.rasDAO;
import be.brammoons.MODEL.ras;

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
@RequestMapping("/Ras")
public class rasController {
    
    @RequestMapping("/GetAll")
    public ArrayList<ras> getAll() {
        ArrayList<ras> alleRassen = rasDAO.getRassen();
        return alleRassen;
        //aanroepen met '../Ras/GetAll'
    }
    
    @RequestMapping("/getById")
    public ras getById(@RequestParam(value = "rasId", defaultValue = "1") int rasId ) {
        return rasDAO.getRasById(rasId);
        //aanroepen met '../Ras/getById?rasId=3'
    }
    
    @RequestMapping(value = "/voegToe", method = RequestMethod.POST)
    public int voegToe(@RequestBody ras nieuwRas) {
        return rasDAO.voegRasToe(nieuwRas);
        //aanroepen met '../Ras/voegToe' met json in de body
    }
    
    @RequestMapping(value = "/wijzig", method = RequestMethod.POST)
    public int wijzig(@RequestBody ras nieuwRas) {
        return rasDAO.updateRas(nieuwRas);
        //aanroepen met '../Ras/wijzig' met json in body
    }
    
    @RequestMapping(value = "/verwijder", method = RequestMethod.POST)
    public int verwijder(@RequestBody MultiValueMap<String, String> parameters) {
        try {
            String rasIdAlsString = parameters.getFirst("rasId");
            int rasId = Integer.parseInt(rasIdAlsString);
            return rasDAO.verwijderRas(rasId);
        } catch (Exception ex) {
            return 0;
        }
        //aanroepen met '../Ras/verwijder' met in de body: rasId=3
    }
    
}
