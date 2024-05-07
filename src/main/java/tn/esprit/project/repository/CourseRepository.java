package tn.esprit.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.project.entity.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
