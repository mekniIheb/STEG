package com.steg.backendSteg.controller;

import com.steg.backendSteg.service.DetailleService;
import com.steg.backendSteg.domain.Detaille;
import com.steg.backendSteg.domain.ERole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/steg/")
public class DetailleController {
    private final DetailleService detailleService;

    @Autowired
    public DetailleController(DetailleService detailleService) {
        this.detailleService = detailleService;
    }

    @PostMapping("detaille")
    public Detaille ajouterdetaille(@RequestBody Detaille detaille) {
        System.out.println("seccs");
        return detailleService.enregistrerDetaille(detaille);
    }

    @GetMapping("detaille/{ERole}")
    public List<Detaille> getDetailleByRole(@PathVariable ERole ERole) {
        return detailleService.getDetailleByRole(ERole);
    }

    @PatchMapping("changeStatus/{idDetaille}")
    public Detaille patchDetailleStatus(@PathVariable String idDetaille, @RequestBody Detaille detaille) {
        return detailleService.patchDetailleStatus(idDetaille, detaille);
    }
}
