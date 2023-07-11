package com.ayushi.TaskUpdated.repository;

import com.ayushi.TaskUpdated.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories //?
public interface CompanyRepository extends JpaRepository<Company, Long> {

}
