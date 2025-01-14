package com.phantom.api.entities.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Permission {

    ADMIN_CREATE("admin:create"),
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_DELETE("admin:delete"),

    PERSONAL_CREATE("personal:create"),
    PERSONAL_READ("personal:read"),
    PERSONAL_UPDATE("personal:update"),
    PERSONAL_DELETE("personal:delete");

    private final String permission;

}
