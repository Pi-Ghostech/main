import { Module } from './module';
export class Course {
    courseId!: number;
    courseName!: string;
    courseCode!: string;
    module: Module = new Module();
}
