package com.ayushi.TaskUpdated.service;

import com.ayushi.TaskUpdated.entity.Company;
import org.springframework.stereotype.Service;

import java.util.List;

public interface CompanyService {
    public Company addCompany(Company comp);

    public List<Company> getCompanies();

    public Company getCompanyById(Long id);

    public Company updateCompany(Long id, Company comp);

    public void deleteCompany(Long id);
}
