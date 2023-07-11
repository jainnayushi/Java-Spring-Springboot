package com.ayushi.assignment1.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Size;
import java.time.LocalDate;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "Name is required")
    @Size(min = 3, message = "Name should have at least 3 characters")
    private String name;

    @PastOrPresent(message = "Joining date should be today or older")
    private LocalDate joiningDate;

    @ManyToOne
    @JoinColumn(name = "company_id")
    @NotNull(message = "Company is required")
    private Company company;

    // Constructors, getters, and setters


    public Employee() {
    }

    public Employee(Long id, String name, LocalDate joiningDate, Company company) {
        this.id = id;
        this.name = name;
        this.joiningDate = joiningDate;
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public void setJoiningDate(LocalDate joiningDate) {
        this.joiningDate = joiningDate;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    // Add custom validation method for company null check
    @PrePersist
    @PreUpdate
    private void validate() {
        if (company == null) {
            throw new IllegalArgumentException("Company must be specified for Employee");
        }
    }
}
