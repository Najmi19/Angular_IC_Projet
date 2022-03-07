package com.pjt4A.itemmag.controller;

import com.pjt4A.itemmag.entity.Moto;
import com.pjt4A.itemmag.entity.Users;
import com.pjt4A.itemmag.entity.Voiture;
import com.pjt4A.itemmag.links.ItemLinks;
import com.pjt4A.itemmag.service.MotoService;
import com.pjt4A.itemmag.service.VoitureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class VehicleController {
    @Autowired
    VoitureService voitureService;
    @Autowired
    MotoService motoService;

    @GetMapping(path = ItemLinks.LIST_MOTO)
    public ResponseEntity<?> listMotos() {
        log.info("VehicleController:  list motos");
        List<Moto> resource = motoService.getMotos();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = ItemLinks.ADD_MOTO)
    public ResponseEntity<?> saveMoto(@RequestBody Moto moto) {
        log.info("VehicleController:  list motos");
        Moto resource = motoService.saveMoto(moto);
        return ResponseEntity.ok(resource);
    }

    @GetMapping(path = ItemLinks.LIST_VOITURE)
    public ResponseEntity<?> listVoiture() {
        log.info("VehicleController:  list voitures");
        List<Voiture> resource =voitureService.getVoitures();
        return ResponseEntity.ok(resource);
    }

    @PostMapping(path = ItemLinks.ADD_VOITURE)
    public ResponseEntity<?> saveVoiture(@RequestBody Voiture voiture) {
        log.info("VehicleController:  list voitures");
        Voiture resource = voitureService.saveVoiture(voiture);
        return ResponseEntity.ok(resource);
    }
}
