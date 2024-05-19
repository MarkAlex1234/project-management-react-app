export interface ProjectInterface {
  title: string;
  description: string;
  date?: string;
}

export interface ProjectListInterface {
  projects: ProjectInterface[];
}
