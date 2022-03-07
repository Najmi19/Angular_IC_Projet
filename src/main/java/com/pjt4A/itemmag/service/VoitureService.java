package com.pjt4A.itemmag.service;

import com.pjt4A.itemmag.entity.Voiture;
import com.pjt4A.itemmag.repository.VoitureRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class VoitureService {
    private VoitureRepository voitureRepository;

    public VoitureService(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }

    public List<Voiture> getVoitures() {
        return voitureRepository.findAll();
    }

    public Voiture saveVoiture(Voiture voiture) {
        return voitureRepository.save(voiture);
    }
}
