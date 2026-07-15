export interface Certification {
  title: string;
  note: string;
  link?: string;
  zones?: string[];
}

export const education = {
  degree: "B.E., Information Science and Engineering",
  institution: "MVJ College of Engineering, Bengaluru (VTU)",
  cgpa: "CGPA 8.5 / 10",
};

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    note: "In progress",
    link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/",
    zones: ["Cloud & Platform Layer"],
  },
  {
    title:
      "Azure Solutions Architect Expert (AZ-305): Identity, Governance & Monitoring",
    note: "Pluralsight",
    link: "https://app.pluralsight.com/achievements/share/b14d9f1d-7ffb-4664-9128-9250ffd8772f",
    zones: ["Cloud & Platform Layer"],
  },
  {
    title:
      "Azure Solutions Architect Expert (AZ-305): Networking, Storage & Compute",
    note: "Pluralsight",
    link: "https://app.pluralsight.com/achievements/share/cbeee633-c06f-4d5c-aa56-4f473c13602a",
    zones: ["Cloud & Platform Layer"],
  },
  {
    title: "IBM Data Science Specialization",
    note: "Coursera. Python, Data Analysis, Applied Capstone",
  },
];
