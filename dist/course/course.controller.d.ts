import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CourseController {
    private courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(name: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findId(id: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addCourse(userId: string, courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeCourse(userId: string, courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCourses(courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addLecture(lectureId: string, courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removeLecture(lectureId: string, courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getLectures(courseId: string): Promise<import("./schema/course.schema").Course & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(name: string): Promise<import("mongodb").DeleteResult>;
}
