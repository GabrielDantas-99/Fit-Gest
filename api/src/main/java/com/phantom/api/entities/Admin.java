package com.phantom.api.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

import static com.phantom.api.entities.enums.Role.ADMIN;

@Entity
@Table(name = "tb_admin")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Admin extends User {

    private String diploma;

    @OneToMany(mappedBy = "admin", cascade = CascadeType.ALL)
    private Set<Academy> academies = new HashSet<>();

    public Admin(Long id, String name, String email, String password, String phone , String diploma) {
        super(id, name, email, password, phone, ADMIN);
        this.diploma = diploma;
    }
}

