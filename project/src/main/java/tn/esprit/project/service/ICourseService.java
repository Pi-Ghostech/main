package tn.esprit.project.service;

import tn.esprit.project.entity.Course;

import java.util.List;

public interface ICourseService {
    Course addCourse(Course course);

    List<Course> getAllCourses();

    Course getCourseById(long courseId);

    void deleteCourse(long courseId);

    Course updateCourse(Course course);
}
