import { TLanguage } from "./language";

export interface ICourse {
  author: any;
  category: any;
  congratulationsMsg: string | null;
  courseImgUrl: string;
  createdAt: string;
  description: any[];
  discount: number;
  hourlySupport: string;
  isPaid: boolean;
  isSubmitted: boolean;
  language: TLanguage;
  lessonCount: number;
  level: TCourseLevel;
  major: string[];
  outcomes: any[];
  price: number;
  promotionalVideoUrl: string;
  rating: number;
  requirements: string[];
  seens: number;
  status: string;
  studentCount: number;
  subtitle: string;
  title: string;
  toWho: any[];
  type: string;
  updatedAt: string;
  welcomeMsg: string;
  _id: string;
}

export interface IAuthor {
  audience: string;
  biography: string;
  createdAt: string;
  email: string;
  fullName: string;
  imgUrl: string;
  isActive: boolean;
  isBlocked: boolean;
  password: string;
  pastTeachingType: string;
  role: { student: boolean; teacher: boolean; _id: string };
  username: string;
  videoPro: string;
  _id: string;
}

export interface IPurchasedCourse {
  author: IAuthor;
  course: ICourse;
  courseId: string;
  createdAt: string;
  discount: number;
  orderId: string;
  price: number;
  total: number;
  userId: string;
  _id: string;
}

export type TCourseLevel = "beginner" | "intermediate" | "expert" | "all";

export interface ISection {
  courseId: string;
  lessons: ILesson[];
  position: number;
  title: string;
  _id: string;
}

export interface ISubject {}

export interface ILesson {
  article: Array<any>;
  description: Array<any>;
  duration: number;
  position: number;
  resources: {
    createAt: string;
    resourcePath: string;
    size: number;
    type: string;
    _id: string;
  }[];
  sectionId: string;
  title: string;
  videoSize: number;
  videoTitle: string | null;
  videoUrl: string | null;
  _id: string;
}

export interface IReview {
  _id: string;
  rating: number;
  comment: string;
  replyId: string | null;
  updatedAt: string;
}
