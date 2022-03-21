export interface ICountry {
    name: string;
    countryCode: string;
  }
export interface IClienCompany {
    name: string;
    code: string;
  }
export interface IProjects {
  id : string;
  name: string;
}
export interface IProjectDetails {
  summary: string;
  name: string;
  contributions: {description:string;}[];
}
export interface ITech {
    name: string;
    code: string;
    proficiency: string;
    yoe: string;
  }
export interface ICert {
  name: string,
  id: string,
}