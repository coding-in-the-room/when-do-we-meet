package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity security) throws Exception
  {
    security.httpBasic().disable();

    security.antMatcher("/**")
            .authorizeRequests()
            .antMatchers("/", "/user/**", "/h2-console/**", "/favicon.ico").permitAll()
            .anyRequest().authenticated()
            .and().logout().logoutSuccessUrl("/").permitAll()
            .and().headers().frameOptions().sameOrigin()
            .and().csrf().disable();
  }
}