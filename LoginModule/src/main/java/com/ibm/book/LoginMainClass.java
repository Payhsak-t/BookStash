package com.ibm.book;

import javax.servlet.Filter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

import com.ibm.book.jwtFilter.AuthFilter;


@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class LoginMainClass {
	@Bean
	public FilterRegistrationBean<Filter> jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
		bean.setFilter(new AuthFilter());
		 bean.addUrlPatterns("/recommend/*");
		bean.addUrlPatterns("/favourites/*");
		return bean;
	}

	public static void main(String[] args) {
		SpringApplication.run(LoginMainClass.class, args);
	}
}