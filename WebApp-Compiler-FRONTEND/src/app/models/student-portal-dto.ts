export class StudentPortalDTO {
    firstName: string;
    lastName: string;
    username: string;
    phoneNumber: string;
    gender: string;
    collegename: string;
    pincode: string;

    // College Details
    currentSemester: string;
    currentCgpa: number;
    ktuId: string;

    // Authentication Details
    email: string;
    password: string;

    // Education Details
    highSchoolCourse: string;
    highSchoolCollege: string;
    highSchoolGraduationYear: number;

    higherSecondaryCourse: string;
    higherSecondaryCollege: string;
    higherSecondaryGraduationYear: number;

    graduationDegree: string;
    graduationCollege: string;
    graduationGraduationYear: string;

    // Projects
    miniProjectName: string;
    miniProjectStack: string;
    miniProjectYear: string;

    mainProjectName: string;
    mainProjectStack: string;
    mainProjectYear: string;

    personalProjectName: string;
    personalProjectStack: string;
    personalProjectYear: string;

    // Frameworks, Languages & Skills
    frameworksKnown1: string;
    frameworksKnown2: string;
    frameworksKnown3: string;

    programmingLanguages1: string;
    programmingLanguages2: string;
    programmingLanguages3: string;

    languagesKnown1: string;
    languagesKnown2: string;
    languagesKnown3: string;

    // Hobbies & Achievements
    hobbies1: string;
    hobbies2: string;
    hobbies3: string;

    achievements1: string;
    achievements2: string;
    achievements3: string;

    softSkills1: string;
    softSkills2: string;
    softSkills3: string;
}
