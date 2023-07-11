package com.ayushi.assignment1.controller;

import com.ayushi.assignment1.model.Company;
import com.ayushi.assignment1.model.Employee;
import com.ayushi.assignment1.repository.CompanyRepository;
import com.ayushi.assignment1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/employees")
@Validated
public class EmployeeController {
    private final EmployeeRepository employeeRepository;
    private final CompanyRepository companyRepository;

    @Autowired
    public EmployeeController(EmployeeRepository employeeRepository, CompanyRepository companyRepository) {
        this.employeeRepository = employeeRepository;
        this.companyRepository = companyRepository;
    }

    // Get One Employee
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployee(@PathVariable @Min(1) Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        return ResponseEntity.ok(employee);
    }

    // Get All Employees
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return ResponseEntity.ok(employees);
    }

    // Add Employee
    @PostMapping
    public ResponseEntity<Employee> addEmployee(@Valid @RequestBody EmployeeRequest employeeRequest) {
        Company company = companyRepository.findById(employeeRequest.getCompanyId())
                .orElseThrow(() -> new IllegalArgumentException("Company not found"));

        Employee employee = new Employee();
        employee.setName(employeeRequest.getName());
        employee.setJoiningDate(employeeRequest.getJoiningDate());
        employee.setCompany(company);

        Employee savedEmployee = employeeRepository.save(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
    }


    // Delete Employee
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable @Min(1) Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));
        employeeRepository.delete(employee);
        return ResponseEntity.ok("Employee deleted successfully");
    }

    // Update Employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable @Min(1) Long id,
            @Valid @RequestBody EmployeeRequest employeeRequest) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employee not found"));

        Company company = companyRepository.findById(employeeRequest.getCompanyId())
                .orElseThrow(() -> new IllegalArgumentException("Company not found"));

        employee.setName(employeeRequest.getName());
        employee.setJoiningDate(employeeRequest.getJoiningDate());
        employee.setCompany(company);

        Employee updatedEmployeeEntity = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployeeEntity);
    }

    // Request DTO for employee creation
    public static class EmployeeRequest {
        @NotNull(message = "Name is required")
        @Size(min = 3, message = "Name should have at least 3 characters")
        private String name;

        @NotNull(message = "Joining date is required")
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
        private LocalDate joiningDate;

        @NotNull(message = "Company ID is required")
        private Long companyId;

        public String getName() {
            return null;
        }

        public Long getCompanyId() {
            return null;
        }

        public LocalDate getJoiningDate() {
            return null;
        }

        // Constructors, getters, and setters
    }
}
