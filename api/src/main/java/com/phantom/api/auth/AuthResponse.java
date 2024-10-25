package com.phantom.api.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.phantom.api.entities.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {

    private String name;
    private String email;
    private Role role;
    @JsonProperty("access_token")
    private String accessToken;
}