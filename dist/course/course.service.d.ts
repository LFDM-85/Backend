import { Model } from 'mongoose';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course, CourseDocument } from './schema/course.schema';
export declare class CourseService {
    private courseModel;
    constructor(courseModel: Model<CourseDocument>);
    create(nameCourse: string, open: boolean): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(nameCourse: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findId(id: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addUser(userId: string, courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeUser(userId: string, courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getUsers(courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addLecture(lectureId: string, courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeLecture(lectureId: string, courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLectures(courseId: string): Promise<Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(nameCourse: string): Promise<import("mongodb").DeleteResult>;
}
