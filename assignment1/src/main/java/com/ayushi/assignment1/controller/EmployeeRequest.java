package com.ayushi.assignment1.controller;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;

public class EmployeeRequest {
    @NotNull(message = "Name is required")
    @Size(min = 3, message = "Name should have at least 3 characters")
    private String name;

    @NotNull(message = "Joining date is required")
    private LocalDate joiningDate;

    @NotNull(message = "Company ID is required")
    private Long companyId;

    // Constructors, getters, and setters

    public EmployeeRequest() {
    }

    public EmployeeRequest(String name, LocalDate joiningDate, Long companyId) {
        this.name = name;
        this.joiningDate = joiningDate;
        this.companyId = companyId;
    }

    public String getName() {
        return name;
    }

    public LocalDate getJoiningDate() {
        return joiningDate;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setJoiningDate(LocalDate joiningDate) {
        this.joiningDate = joiningDate;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }
}