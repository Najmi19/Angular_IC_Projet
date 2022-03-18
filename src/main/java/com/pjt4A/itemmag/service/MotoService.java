package com.pjt4A.itemmag.service;

import com.pjt4A.itemmag.entity.Moto;
import com.pjt4A.itemmag.entity.Users;
import com.pjt4A.itemmag.repository.MotoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MotoService {
    private MotoRepository motoRepository;

    public MotoService(MotoRepository motoRepository) {
        this.motoRepository = motoRepository;
    }

    public List<Moto> getMotos() {
        return motoRepository.findAll();
    }

    public Moto saveMoto(Moto moto) {
        return motoRepository.save(moto);
    }
}
