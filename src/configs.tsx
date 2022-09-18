interface IExperiences{
    title: string,
    workPlace: string,
    repository: string,
    technical: string,
    date: string,
    background: string,
    color: string,
    certifications?: string
}
export default class MyInfoProvider{
    static Experiences: IExperiences[] = [
        {
            title: "Universiry Of Transport And Communications",
            workPlace: "Information Technology",
            repository: "Student",
            technical: "2.7",
            date:"2017 - 2021",
            background: "#2596be",
            color: "#fff"
        },
        {
            title: "Backend Asp.Net Developer Intern",
            workPlace: "Công ty TNHH Công nghệ và truyền thông 3i",
            repository: "Backend Asp.Net Intern",
            technical: "C#, Asp.Net Core 2.1, HTML, CSS, Ajax, Jquery, SQL, JSON",
            date: "11/2019 - 2/2020",
            background: "#7851a9",
            color: "#fff"
        },
        {
            title: "Backend and Frontend Developer",
            workPlace: "Add-on Developer",
            repository: "Develop API, Package, Infrastructure, UI/UX",
            technical: "Multi-Tenant, Azure, Service Fabric, .Net Core, React Typescript",
            date:"11/2021 - present",
            background: "#05836D",
            color: "#fff",
            certifications: "Azure Data Engineer Associate"
        }
    ]
}