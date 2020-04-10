/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package be.brammoons.WEBSERVICE;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author BramLaptop
 */
@SpringBootApplication
@CrossOrigin
@RestController
public class webservice {
    public static void main(String[] args) {
        SpringApplication.run(webservice.class, args);
    }
}
