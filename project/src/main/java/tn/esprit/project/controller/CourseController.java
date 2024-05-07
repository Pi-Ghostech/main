package tn.esprit.project.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tn.esprit.project.entity.Course;
import tn.esprit.project.entity.Module;
import tn.esprit.project.service.ICourseService;
import tn.esprit.project.service.IModuleService;

import java.io.IOException;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/course")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CourseController {
    ICourseService courseService;
    IModuleService moduleService;

    @PostMapping("/add")
    //public Course addCourse(@RequestBody Course course) {return courseService.addCourse(course);}
    public Course addCourse(@RequestParam("file") MultipartFile file, // Add MultipartFile parameter for file upload
                            @RequestParam("course") String courseJson) throws IOException { // Add JSON string parameter for course data
        Course course = new ObjectMapper().readValue(courseJson, Course.class); // Convert JSON string to Course object
        if (!file.isEmpty()) {
            String fileName = file.getOriginalFilename(); // Get the original file name
            course.setAttachmentFileName(fileName); // Set the attachment file name
            // Save the file to the desired location if needed
        }
        return courseService.addCourse(course);
    }

    @GetMapping("/getAll")
    public List<Course> getAllCourses() {return courseService.getAllCourses();}

    @GetMapping("/{id}")
    public Course getCourseById(@PathVariable("id") long courseId) {return courseService.getCourseById(courseId);}

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable("id") long courseId) {courseService.deleteCourse(courseId);}

    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable("id") long courseId, @RequestBody Course coursedetails) {
        Course course = courseService.getCourseById(courseId);
        course.setCourseName(coursedetails.getCourseName());
        course.setCourseCode(coursedetails.getCourseCode());

        if (coursedetails.getModule() != null) {
            Module newModule = moduleService.getModuleById(coursedetails.getModule().getModuleId());
            course.setModule(newModule);
        }

        Course updatedCourse = courseService.addCourse(course);
        return ResponseEntity.ok(updatedCourse);
    }

}
