export interface ProjectInterface {
  title: string;
  description: string;
  date: Date;
}

export interface ProjectListInterface {
  projects: ProjectInterface[];
}
