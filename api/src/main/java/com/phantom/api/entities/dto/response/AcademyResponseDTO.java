package com.phantom.api.entities.dto.response;

import com.phantom.api.entities.Academy;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AcademyResponseDTO {
    private Long id;
    private String bannerUrl;
    private String street;
    private String city;
    private String state;
    private String zip;

    public AcademyResponseDTO(Academy academy) {
        this.id = academy.getId();
        this.bannerUrl = academy.getBannerUrl();
        this.street = academy.getAddress().getStreet();
        this.city = academy.getAddress().getCity();
        this.state = academy.getAddress().getState();
        this.zip = academy.getAddress().getZip();
    }
}
