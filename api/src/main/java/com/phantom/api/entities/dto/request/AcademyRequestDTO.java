package com.phantom.api.entities.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AcademyRequestDTO {
    private Long adminId;
    private String street;
    private String city;
    private String state;
    private String zip;
    private String bannerUrl;
}
