package com.phantom.api.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import static com.phantom.api.entities.enums.Role.STUDENT;


@Entity
@Table(name = "tb_student")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Student extends User {

    @ManyToOne
    @JoinColumn(name = "personal_id")
    private Personal personal;

    private String goal;
    private boolean isActive  = true;

    public Student(Long id, String name, String email, String password, String phone, String goal, boolean isActive) {
        super(id, name, email, password, phone, STUDENT);
        this.goal = goal;
        this.isActive = isActive;
    }
}

