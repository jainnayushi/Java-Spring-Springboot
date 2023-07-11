package com.ayushi.TaskUpdated.service;

import com.ayushi.TaskUpdated.entity.Company;
import com.ayushi.TaskUpdated.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CompanyServiceImpl implements CompanyService {
    @Autowired
    private CompanyRepository companyRepo;

    @Override
    public Company addCompany(Company comp) {
        return companyRepo.save(comp);
    }

    @Override
    public List<Company> getCompanies() {
        return companyRepo.findAll();
    }

    @Override
    public Company getCompanyById(Long id) throws CompanyNotFoundException {
        Optional<Company> comp = companyRepo.findById(id);
        if (!comp.isPresent()) {
            throw new CompanyNotFoundException("Company with id " + id + " not available");
        }
        return comp.get();
    }

    @Override
    public Company updateCompany(Long id, Company comp) {
        Company compDB = companyRepo.findById(id).get();
        if (Objects.nonNull(comp.getCompName()) && !"".equalsIgnoreCase(comp.getCompName())) {
            compDB.setCompName(comp.getCompName());
        }
        return companyRepo.save(compDB);
    }

    @Override
    public void deleteCompany(Long id) throws CompanyNotFoundException {
        Optional<Company> comp = companyRepo.findById(id);
        if (!comp.isPresent()) {
            throw new CompanyNotFoundException("Company with id " + id + " not available to be deleted");
        }
        companyRepo.deleteById(id);
    }

    @Override
    public void deleteAllCompany() {
        companyRepo.deleteAll();
    }
}


