package com.phantom.api.entities.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.phantom.api.entities.enums.Permission.*;

@Getter
@RequiredArgsConstructor
public enum Role {
    STUDENT(Collections.emptySet()),
    ADMIN(
            Set.of(
                    ADMIN_READ,
                    ADMIN_CREATE,
                    ADMIN_UPDATE,
                    ADMIN_DELETE,
                    PERSONAL_READ,
                    PERSONAL_CREATE,
                    PERSONAL_UPDATE,
                    PERSONAL_DELETE
            )
    ),
    PERSONAL(
            Set.of(
                    PERSONAL_READ,
                    PERSONAL_CREATE,
                    PERSONAL_UPDATE,
                    PERSONAL_DELETE
            )
    );

    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities =  getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority((permission.getPermission())))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
