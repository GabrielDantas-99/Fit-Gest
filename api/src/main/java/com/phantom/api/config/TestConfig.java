package com.phantom.api.config;

import com.phantom.api.entities.*;
import com.phantom.api.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@Configuration
@Profile("test")
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final AdminRepository adminRepository;
    private final PersonalRepository personalRepository;
    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;
    private final AcademyRepository academyRepository;
    private final AddressRepository addressRepository;

    @Override
    public void run(String... args) throws Exception {

        Admin a1 = new Admin(
                null,
                "Higo Admin",
                "higo@mail.com",
                "988888888",
                passwordEncoder.encode("123123"),
                "Harvard"
        );
        Admin a2 = new Admin(
                null,
                "Gabriel Admin",
                "gabriel@mail.com",
                "123123",
                passwordEncoder.encode("123123"),
                "Soft Engineer"
        );
        Personal p1 = new Personal(
                null,
                "Filipe Personal",
                "filipe@mail.com",
                "977777777",
                passwordEncoder.encode("111111"),
                "Cross Fit"
        );Personal p2 = new Personal(
                null,
                "Elder Personal",
                "elder@mail.com",
                "911111111",
                passwordEncoder.encode("222123"),
                "Melhor Idade"
        );
        Student s1 = new Student(
                null,
                "Raphael Dantas",
                "raphael@mail.com",
                "977775777",
                passwordEncoder.encode("222222"),
                "Blindão",
                true
        );
        Student s2 = new Student(
                null,
                "Ana Souza",
                "ana.souza@mail.com",
                "966666666",
                passwordEncoder.encode("333333"),
                "Ganhar massa",
                false
        );
        Student s3 = new Student(
                null,
                "Carlos Oliveira",
                "carlos.oliveira@mail.com",
                "955555555",
                passwordEncoder.encode("444444"),
                "Resistência",
                true
        );
        Student s4 = new Student(
                null,
                "Mariana Lima",
                "mariana.lima@mail.com",
                "944444444",
                passwordEncoder.encode("555555"),
                "Saúde",
                false
        );
        Student s5 = new Student(
                null,
                "Felipe Santos",
                "felipe.santos@mail.com",
                "933333333",
                passwordEncoder.encode("666666"),
                "Longevidade",
                true
        );

        personalRepository.saveAll(Arrays.asList(p1, p2));
        adminRepository.saveAll(Arrays.asList(a1, a2));
        List<Student> students = new ArrayList<>(Arrays.asList(s1, s2, s3, s4, s5));
        studentRepository.saveAll(students);

        s1.setPersonal(p1);
        s2.setPersonal(p2);
        s3.setPersonal(p1);
        s4.setPersonal(p2);
        s5.setPersonal(p1);

        studentRepository.saveAll(students);

        Academy ac1 = new Academy();
        Academy ac2 = new Academy();
        Academy ac3 = new Academy();

        ac1.setBannerUrl("/ac1-banner");
        ac2.setBannerUrl("/ac2-banner");
        ac3.setBannerUrl("/ac3-banner");
        ac1.setAdmin(a1);
        ac2.setAdmin(a1);
        ac3.setAdmin(a2);
        ac1.setStudents(new HashSet<>(Arrays.asList(s1, s2, s3, s4, s5)));
        Address ad1 = new Address(null, "Rua Lago da Pedra", "Natal", "RN", "59088-00");
        Address ad2 = new Address(null, "Rua Prudente de Morais", "Natal", "RN", "59069-520");
        Address ad3 = new Address(null, "Rua Roberto Freire", "Natal", "RN", "12323-00");
        ac1.setAddress(ad1);
        ac2.setAddress(ad2);
        ac3.setAddress(ad3);
        academyRepository.saveAll(Arrays.asList(ac1, ac2, ac3));

    }
}
