package com.phantom.api.config;

import com.phantom.api.entities.User;
import com.phantom.api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Arrays;

import static com.phantom.api.entities.enums.Role.*;

@Configuration
@Profile("test")
@RequiredArgsConstructor
public class TestConfig implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {

        User u1 = new User(null, "Maria Brown", "maria@gmail.com", "988888888", passwordEncoder.encode("123456"), ADMIN);
        User u2 = new User(null, "Alex Green", "alex@gmail.com", "977777777", passwordEncoder.encode("654321"), MANAGER);
        User u3 = new User(null, "Harley Quinn", "harley@gmail.com", "966665555", passwordEncoder.encode("123321"), USER);

        userRepository.saveAll(Arrays.asList(u1, u2, u3));
    }
}
