package com.ayushi.assignment1.controller;

import com.ayushi.assignment1.model.Company;
import com.ayushi.assignment1.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.List;

@RestController
@RequestMapping("/companies")
@Validated
public class CompanyController {
    private final CompanyRepository companyRepository;

    @Autowired
    public CompanyController(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }

    // Get One Company
    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompany(@PathVariable @Min(1) Long id) {
        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Company not found"));
        return ResponseEntity.ok(company);
    }

    // Get All Companies
    @GetMapping
    public ResponseEntity<List<Company>> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return ResponseEntity.ok(companies);
    }

    // Add Company
    @PostMapping
    public ResponseEntity<Company> addCompany(@Valid @RequestBody Company company) {
        Company savedCompany = companyRepository.save(company);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCompany);
    }

    // Delete Company
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCompany(@PathVariable @Min(1) Long id) {
        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Company not found"));
        companyRepository.delete(company);
        return ResponseEntity.ok("Company deleted successfully");
    }

    // Update Company
    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable @Min(1) Long id, @Valid @RequestBody Company updatedCompany) {
        Company company = companyRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Company not found"));

        company.setName(updatedCompany.getName());

        Company updatedCompanyEntity = companyRepository.save(company);
        return ResponseEntity.ok(updatedCompanyEntity);
    }
}

