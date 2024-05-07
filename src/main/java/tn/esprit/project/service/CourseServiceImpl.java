package tn.esprit.project.service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tn.esprit.project.entity.Course;
import tn.esprit.project.repository.CourseRepository;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class CourseServiceImpl implements ICourseService{
    CourseRepository courseRepository;

    @Override
    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course getCourseById(long courseId) {
        return courseRepository.findById(courseId).get();
    }

    @Override
    public void deleteCourse(long courseId) {
        courseRepository.deleteById(courseId);
    }

    @Override
    public Course updateCourse(Course course) {
        return courseRepository.save(course);
    }
}
