// Imports remain the same for your images
import googleCertImg from "@/assets/images/Education/google.png";
import awsCertImg from "@/assets/images/Education/aws.png";
import msCertImg from "@/assets/images/Education/microsoft.png";

export interface Certification {
    title: string;
    issuer: string;
    date: string;
    logo: string;
}

export const CERTIFICATIONS: Certification[] = [
    {
        title: "Microsoft Certified: Azure Developer Associate",
        issuer: "Microsoft",
        date: "March 16, 2023",
        logo: msCertImg
    },
    {
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "AWS Academy",
        date: "December 18, 2021",
        logo: awsCertImg
    },
    {
        title: "Android Basics in Kotlin",
        issuer: "Google Developers",
        date: "October 17, 2022",
        logo: googleCertImg
    }
];