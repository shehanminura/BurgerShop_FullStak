package edu.icet.ecom.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;

public class Config {
    @Bean
    public ModelMapper getMapper(){
        return new ModelMapper();
    }
}
