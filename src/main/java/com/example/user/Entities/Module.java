package com.example.user.Entities;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Module {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long moduleId;

        private String moduleName;

        private String description;

        @OneToMany(mappedBy = "module", cascade = CascadeType.ALL)
        @JsonBackReference("module")
        private Set<Course> courses;
    }

