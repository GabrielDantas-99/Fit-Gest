package com.phantom.api.entities;

import com.phantom.api.entities.enums.Role;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

import static com.phantom.api.entities.enums.Role.PERSONAL;

@Entity
@Table(name = "tb_personal")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Personal extends User {

    private String especialidade;

    @OneToMany
    @JoinTable(
            name = "personal_students",
            joinColumns = @JoinColumn(name = "personal_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    private Set<Student> students = new HashSet<>();

    public Personal(Long id, String name, String email, String password, String phone, String especialidade) {
        super(id, name, email, password, phone, PERSONAL);
        this.especialidade = especialidade;
    }
}

