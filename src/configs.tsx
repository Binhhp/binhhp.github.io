interface IExperiences {
  title: string;
  workPlace: string;
  repository: string;
  technical: string;
  date: string;
  background: string;
  color: string;
  certifications?: string[];
}
export default class MyInfoProvider {
  static Experiences: IExperiences[] = [
    {
      title: "Universiry Of Transport And Communications",
      workPlace: "Information Technology",
      repository: "Student",
      technical: "2.7",
      date: "2017 - 2021",
      background: "#2596be",
      color: "#fff",
    },
    {
      title: "Backend Asp.Net Developer Intern",
      workPlace: "Công ty TNHH Công nghệ và truyền thông 3i",
      repository: "Backend Asp.Net Intern",
      technical: "C#, Asp.Net Core 2.1, HTML, CSS, Ajax, Jquery, SQL, JSON",
      date: "11/2019 - 2/2020",
      background: "#7851a9",
      color: "#fff",
    },
    {
      title: "Backend and Frontend Developer",
      workPlace: "Add-on Developer",
      repository: "Develop API, Package, Infrastructure, ReactJS",
      technical:
        "Multi-Tenant, Azure, Service Fabric, .Net Core, React Typescript",
      date: "11/2021 - present",
      background: "#05836D",
      color: "#fff",
      certifications: [
        "Microsoft Certified: Azure Data Engineer Associate",
        "Microsoft Certified: Azure Developer Associate",
      ],
    },
  ];
  static Skills = {
    ProgramingLanguage: ["C#", "Javascript", "HTML/CSS/SASS"],
    PlatformFrameworksLibraries: ["Asp.Net Core", "ReactJS / Redux", "OpenCV"],
    Database: ["MS SQL", "Firebase"],
    VersionControl: ["Git", "SVN"],
    IDEs: ["Vim", "Visual Studio Code"],
    Knowledge: [
      "Understanding about OOP",
      "Multi Tenancy",
      "Microservices",
      "Rest API & Grpc & WCF",
      "Entity Framework & LinQ",
      "Autofac",
      "Identity & Access Manager",
      "Design Patterns & Infrastructure",
      "Domain Driven Design",
      "Docker",
      "Reverse Proxy",
    ],
  };
}
