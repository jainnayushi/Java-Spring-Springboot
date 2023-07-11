package com.assignment.EmployeeCompany.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JwtRequest {
//    @Id
    private String email;
    private String password;

}
