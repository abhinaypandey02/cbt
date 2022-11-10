import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import CertificationCard from "./CertificationCard";

const BLUE_ROUND_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/blue_round_tick.png'} alt={"blue round tick"}/>;
const BLUE_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/blue_tick.png'} alt={"blue tick"}/>;
const BLUE_ARROW=<StaticImage placeholder="blurred" src={'../../../images/certifications/blue_arrow.png'} alt={"blue arrow"}/>;
const GREEN_ROUND_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/green_round_tick.png'} alt={"green round tick"}/>;
const GREEN_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/green_tick.png'} alt={"green tick"}/>;
const GREEN_ARROW=<StaticImage placeholder="blurred" src={'../../../images/certifications/green_arrow.png'} alt={"green arrow"}/>;
const BLACK_ROUND_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/black_round_tick.png'} alt={"black round tick"}/>;
const BLACK_TICK=<StaticImage placeholder="blurred" src={'../../../images/certifications/black_tick.png'} alt={"black tick"}/>;
const BLACK_ARROW=<StaticImage placeholder="blurred" src={'../../../images/certifications/black_arrow.png'} alt={"black arrow"}/>;
export const GROUP1 = [
    {
        title: "PMI",
        desc: "Pass PMI Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support PMI PMP, ACP, CAPM, PBA, RMP, and all online exams.",
        link: "/certifications/pmi",
        sub_groups: [
            {
                title: "PMP",
                desc: "Pass PMP Certifications Online From Home without relying on PMP Dumps with PMP Proxy Exam if fail get Our Fee + Exam Fee Refunded. PAY AFTER YOU PASS.",
                link: "/certifications/pmi/pmp",
            },
            {
                title: "PMI-ACP",
                desc: "Pass PMI ACP Certifications Online from Home without relying on PMI ACP Dumps with PMI ACP Proxy Exam if fail get Our Fee + Exam Fee Refunded. PAY AFTER YOU PASS",
                link: "/certifications/pmi/pass-pmi-acp-dumps-proxy",
            },
            {
                title: "PMI-RMP",
                desc: "Pass RMP Certifications Online from Home without relying on RMP Dumps with RMP Proxy Exam if fail get Our Fee + Exam Fee Refunded. PAY AFTER YOU PASS",
                link: "/certifications/pmi/rmp",
            },
        ],
    },
    {
        title: "AWS",
        desc: "Pass AWS Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support AWS Associate, Professional, Specialty and all online exams.",
        link: "/certifications/aws",
        sub_groups: [
            {
                title: "Cloud Practitioner",
                desc: "Pass AWS CLF-C01 with CBTproxy AWS Online Exam Passing guarantee. Pass in first attempt without relying on CLF-C01 dumps & pay after passing.",
                link: "/certifications/aws/aws-certified-cloud-practitioner-exam",
            },
            {
                title: "Solution Architect Associate",
                desc: "Pass AWS SAA-C03 with CBTproxy AWS Online Exam Passing Guarantee. Pass in first attempt without relying on SAA-C03 dumps & pay after passing.",
                link: "/certifications/aws/aws-solutions-architect-associate",
            },
            {
                title: "Security Specialty",
                desc: "Pass AWS SCS-C01 with CBTproxy AWS Online Exam Passing guarantee. Pass in first attempt without relying on SCS-C01 dumps & Pay after passing.",
                link: "/certifications/aws/security-specialty",
            },
        ],
    },
    {
        title: "CompTIA",
        desc: "Pass CompTIA Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support CompTIA Network+, A+, Security+, Linux+, Cysa+, CASP+ and all online exams.",
        link: "/certifications/comptia",
        sub_groups: [
            {
                title: "Security+",
                desc: "Pass CompTIA Security+ certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/comptia/comptia-security-plus",
            },
            {
                title: "Network+",
                desc: "Pass CompTIA Network+ certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/comptia/comptia-network-plus",
            },
            {
                title: "CASP+",
                desc: "Pass CompTIA Advanced Security Practitioner (CASP+) certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CASP dumps & pay after you pass the exam.",
                link: "/certifications/comptia/comptia-casp",
            },
        ],
    },
];
const GROUP2 = [
    {
        title: "Paloalto",
        desc: "Pass Paloalto Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Paloalto PCCSA, PCNSA, PCNSE and all online exams.",
        link: "/certifications/paloalto",
        sub_groups: [
            {
                title: "PCNSA",
                desc: "Pass Palo Alto - PCNSA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/paloalto/pcnsa",
            },
            {
                title: "PCNSE",
                desc: "Pass Palo Alto - PCNSE certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/paloalto/pcnse",
            },
            {
                title: "PCCSA",
                desc: "Pass Palo Alto - PCCSA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/paloalto/pccsa",
            },
        ],
    },
    {
        title: "ISACA",
        desc: "Pass ISACA Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support ISACA CISA, CISM, CRISC, CDPSE and all online exams.",
        link: "/certifications/isaca",
        sub_groups: [
            {
                title: "CISA",
                desc: "Pass ISACA CISA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CISA dumps & pay after you pass the exam.",
                link: "/certifications/isaca/pass-cisa-exam-without-dumps",
            },
            {
                title: "CISM",
                desc: "Pass ISACA CISM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CISM dumps & pay after you pass the exam.",
                link: "/certifications/isaca/pass-cism-exam-without-dumps",
            },
            {
                title: "CRISC",
                desc: "Pass ISACA CRISC certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CRISC dumps & pay after you pass the exam.",
                link: "/certifications/isaca/pass-crisc-exam-without-dumps",
            },
        ],
    },
    {
        title: "ISC2",
        desc: "Pass ISC2 Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support (ISC)² CISSP, CCSP, SSCP, CISSP Concentrations and all online exams.",
        link: "/certifications/isc2",
        sub_groups: [
            {
                title: "CISSP",
                desc: "Pass (ISC)² CISSP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CISSP dumps & pay after you pass the exam.",
                link: "/certifications/isc2/cissp",
            },
            {
                title: "CCSP",
                desc: "Pass (ISC)² CCSP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CCSP dumps & pay after you pass the exam.",
                link: "/certifications/isc2/ccsp",
            },
            {
                title: "SSCP",
                desc: "Pass SSCP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on SSCP dumps & pay after you pass the exam.",
                link: "/certifications/isc2/sscp",
            },
        ],
    },
];
const GROUP3 = [
    {
        title: "Checkpoint",
        desc: "Pass Check Point Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Checkpoint CCSA, CCSE, CCSM and all online exams.",
        link: "/certifications/checkpoint",
        sub_groups: [
            {
                title: "CCSA",
                desc: "Pass CheckPoint CCSA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on SSCP dumps & pay after you pass the exam.",
                link: "/certifications/checkpoint/ccsa",
            },
            {
                title: "CCSM",
                desc: "Pass CheckPoint CCSM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CCSM dumps & pay after you pass the exam.",
                link: "/certifications/checkpoint/ccsm",
            },
            {
                title: "CCSE",
                desc: "Pass CheckPoint CCSE certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CCSE dumps & pay after you pass the exam.",
                link: "/certifications/checkpoint/ccse",
            },
        ],
    },
    {
        title: "EC-Council",
        desc: "Pass EC-Council Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support EC-Council CEH, CND, CHFI and all online exams.",
        link: "/certifications/ec-council",
        sub_groups: [
            {
                title: "CEH",
                desc: "Pass CheckPoint CEH certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CEH dumps & pay after you pass the exam.",
                link: "/certifications/ec-council/ceh",
            },
            {
                title: "CHFI",
                desc: "Pass CheckPoint CHFI certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on CHFI dumps & pay after you pass the exam.",
                link: "/certifications/ec-council/chfi",
            },
            {
                title: "ECSA",
                desc: "Pass CheckPoint ECSA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on ECSA dumps & pay after you pass the exam.",
                link: "/certifications/ec-council/ecsa",
            },
        ],
    },
    {
        title: "GCP",
        desc: "Pass Google Cloud GCP Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Google Cloud GCP Associate, Professional and all online exams.",
        link: "/certifications/gcp",
        sub_groups: [
            {
                title: "Associate Cloud Engineer",
                desc: "Pass GCP - Associate Cloud Engineer certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/gcp/associate-cloud-engineer",
            },
            {
                title: "Digital Leader",
                desc: "Pass GCP - Cloud Digital Leader certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/gcp/cloud-digital-leader-certification",
            },
            {
                title: "Professional Cloud Architect",
                desc: "Pass GCP - Professional Cloud Architect (PCA) certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/gcp/pca-certification",
            },
        ],
    },
];
const GROUP4 = [
    {
        title: "Fortinet",
        desc: "Pass Fortinet Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Fortinet NSE4, NSE5, NSE6, NSE7 and all online exams.",
        link: "/certifications/fortinet",
        sub_groups: [
            {
                title: "NSE4",
                desc: "Pass Fortinet - NSE4 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/fortinet/nse4",
            },
            {
                title: "NSE5",
                desc: "Pass Fortinet - NSE5 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/fortinet/nse5",
            },
            {
                title: "NSE6",
                desc: "Pass Fortinet - NSE6 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/fortinet/nse6",
            },
        ],
    },
    {
        title: "IAPP",
        desc: "Pass IAPP Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support IAPP CIPM, CIPT, CIPP and all online exams.",
        link: "/certifications/iapp",
        sub_groups: [
            {
                title: "CIPM",
                desc: "Pass CIPM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iapp/cipm",
            },
            {
                title: "CIPT",
                desc: "Pass CIPT certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iapp/cipt",
            },
            {
                title: "CIPP",
                desc: "Pass CIPM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iapp/cipm",
            },
        ],
    },
    {
        title: "Cisco",
        desc: "Pass Cisco Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Cisco CCNA, CCNP Core, CCNP Concentration, and all online exams.",
        link: "/certifications/cisco",
        sub_groups: [
            {
                title: "CCNA",
                desc: "Pass CISCO - CCNA 200-301 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/cisco/ccna-200-301",
            },
            {
                title: "CCNP Enterprises Core",
                desc: "Pass CISCO 350-401 ENCOR certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/cisco/cisco-350-401-encor",
            },
            {
                title: "CCNP Enterprises Concentration",
                desc: "Pass CISCO 300-410 ENARSI certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/cisco/cisco-300-410-enarsi",
            },
        ],
    },
];
const GROUP5 = [
    {
        title: "ITIL",
        desc: "Pass ITIL Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support ITIL Foundation, Practitioner, and all online exams.",
        link: "/certifications/itil",
        sub_groups: [
            {
                title: "ITIL Foundation",
                desc: "Pass AXELOS - ITIL 4 Foundation certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/itil/itil-4-foundation",
            },
            {
                title: "ITIL Practitioner",
                desc: "Pass AXELOS - ITIL Practitioner certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/itil/itil-practitioner",
            },
            {
                title: "ITIL Leader",
                desc: "Pass AXELOS - ITIL 4 Leader: Digital & IT Strategy certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/itil/itil-4-leader-digital-and-it-strategy",
            },
        ],
    },
    {
        title: "Prince2",
        desc: "Pass Prince2 Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Prince2 Foundation, Practitioner, and all online exams.",
        link: "/certifications/prince2",
        sub_groups: [
            {
                title: "Prince2 Foundation",
                desc: "Pass PRINCE2 Foundation certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/prince2/foundation",
            },
            {
                title: "Prince2 Practitioner",
                desc: "Pass PRINCE2 Practitioner certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/prince2/practitioner",
            },
            {
                title: "Prince2 Agile Practitioner",
                desc: "Pass PRINCE2 Agile Practitioner certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/prince2/agile-practitioner",
            },
        ],
    },
    {
        title: "Microsoft Azure",
        desc: "Pass Microsoft Azure Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Microsoft Azure AZ-104, AZ-305, AZ-900, and all online exams.",
        link: "/certifications/microsoft-azure",
        sub_groups: [
            {
                title: "AZ-104",
                desc: "Pass Microsoft Certified AZ-104 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/microsoft-azure/microsoft-certified-azure-administrator-associate-az-104",
            },
            {
                title: "SC-300",
                desc: "Pass Microsoft Certified SC-300 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/microsoft-azure/microsoft-certified-identity-and-access-administrator-associate-sc-300",
            },
            {
                title: "DP-900",
                desc: "Pass Microsoft Certified DP-900 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/microsoft-azure/microsoft-certified-azure-data-fundamentals-dp-900",
            },
        ],
    },
];
const GROUP6 = [
    {
        title: "Axelos PeopleCert",
        desc: "Pass Axelos PeopleCert Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Axelos PeopleCert MoP, MoV, MoR, COBIT, Six Sigma and all online exams.",
        link: "/certifications/axelos-peoplecert",
        sub_groups: [
            {
                title: "Six Sigma Black Belt",
                desc: "Pass Six Sigma Black Belt certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/axelos-peoplecert/six-sigma-black-belt",
            },
            {
                title: "COBIT5 Foundation",
                desc: "Pass COBIT 5 Foundation certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/axelos-peoplecert/cobit-5-foundation",
            },
            {
                title: "Scrum Master 1",
                desc: "Pass PeopleCert Scrum Master 1 certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/axelos-peoplecert/peoplecert-scrum-master-1",
            },
        ],
    },
    {
        title: "F5",
        desc: "Pass F5 Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support F5 101, 201, 202 and all online exams.",
        link: "/certifications/f5",
        sub_groups: [
            {
                title: "101 Application Delivery Fundamental",
                desc: "Pass F5 - Exam 101 Application Delivery Fundamentals certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/f5/exam-101-application-delivery-fundamentals",
            },
            {
                title: "201 TMOS Administrator",
                desc: "Pass F5 - Exam 201 TMOS Administration certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/f5/exam-201-tmos-administration",
            },
            {
                title: "202 Pre-Sales Fundamentals",
                desc: "Pass F5 - Exam 202–Pre-Sales Fundamentals certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/f5/exam-202-pre-sales-fundamentals",
            },
        ],
    },
    {
        title: "APICS",
        desc: "Pass APICS Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support APICS CSCP, CPIM, CLTD and all online exams.",
        link: "/certifications/apics",
        sub_groups: [
            {
                title: "CSCP",
                desc: "Pass APICS CSCP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/apics/cscp",
            },
            {
                title: "CPIM",
                desc: "Pass APICS CPIM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/apics/cpim",
            },
            {
                title: "CLTD",
                desc: "Pass APICS CLTD certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/apics/cltd",
            },
        ],
    },
];
const GROUP7 = [
    {
        title: "ASIS",
        desc: "Pass ASIS Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support ASIS CPP, PSI, PSP, and all online exams.",
        link: "/certifications/asis",
        sub_groups: [
            {
                title: "PSP",
                desc: "Pass ASIS PSP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/asis/psp",
            },
            {
                title: "PCI",
                desc: "Pass ASIS PCi certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/asis/pci",
            },
            {
                title: "CPP",
                desc: "Pass ASIS CPP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/asis/cpp",
            },
        ],
    },
    {
        title: "IIBA",
        desc: "Pass IIBA Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support IIBA ECBA, CCBA, CBAP and all online exams.",
        link: "/certifications/iiba",
        sub_groups: [
            {
                title: "CBAP",
                desc: "Pass CBAP certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iiba/cbap",
            },
            {
                title: "ECBA",
                desc: "Pass ECBA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iiba/ecba",
            },
            {
                title: "CBDA",
                desc: "Pass CBDA certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/iiba/cbda",
            },
        ],
    },
    {
        title: "Juniper",
        desc: "Pass Juniper Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Juniper Associate, Specialist, Professional and all online exams.",
        link: "/certifications/juniper",
        sub_groups: [
            {
                title: "JNCIA – Junos",
                desc: "Pass JN0-104 JNCIA-Junos certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/juniper/jn0-104-jncia-junos",
            },
            {
                title: "JNCIP – ENT",
                desc: "",
                link: "/certifications/juniper/jn0-649-jncip-ent",
            },
            {
                title: "JNCIP – SEC",
                desc: "Pass JN0-635 JNCIP-SEC certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/juniper/jn0-635-jncip-sec",
            },
        ],
    },
];
const GROUP8 = [
    {
        title: "Kubernetes",
        desc: "Pass Kubernetes Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Kubernetes CKA, CKAD, CKSS, and all online exams.",
        link: "/certifications/Kubernetes",
        sub_groups: [
            {
                title: "CKA",
                desc: "Pass Kubernetes CKS certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/Kubernetes/cks",
            },
            {
                title: "CKAD",
                desc: "Pass Kubernetes CKAD certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/Kubernetes/ckad",
            },
            {
                title: "CKS",
                desc: "Pass Kubernetes CKS certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/Kubernetes/cks",
            },
        ],
    },
    {
        title: "SAFe",
        desc: "Pass SAFe Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support SAFe APM, LPM, SSM, and all online exams.",
        link: "/certifications/safe",
        sub_groups: [
            {
                title: "APM",
                desc: "Pass SAFe APM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/safe/safe-apm",
            },
            {
                title: "ASE",
                desc: "Pass SAFe ASE certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/safe/safe-ase",
            },
            {
                title: "LPM",
                desc: "Pass SAFe LPM certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/safe/safe-lpm",
            },
        ],
    },
    {
        title: "VMware",
        desc: "Pass VMware Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support VMware VCTA, VCP, VCAP and all online exams.",
        link: "/certifications/vmware/",
        sub_groups: [
            {
                title: "VCAP-DCV",
                desc: "Pass VCAP-DCV Deploy certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/vmware/vcap-dcv-deploy",
            },
            {
                title: "VCP Security",
                desc: "Pass VCP Security certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/vmware/vcp-security",
            },
            {
                title: "VCTA Security",
                desc: "Pass VCTA-Security certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/vmware/vcta-security",
            },
        ],
    },
];
const GROUP9 = [
    {
        title: "GIAC",
        desc: "Pass GIAC Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support GIAC GSEC, GCIH and all online exams.",
        link: "/certifications/giac",
        sub_groups: [
            {
                title: "GCIH",
                desc: "Pass GCIH certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/giac/gcih",
            },
        ],
    },
    {
        title: "Cloud Security Alliance",
        desc: "Pass Cloud Security Alliance Certifications Exam Online with the help of CBT proxy and pass on the first attempt. We Support Cloud Security Alliance CCSA, CCSK and all online exams.",
        link: "/certifications/cloud-security-alliance",
        sub_groups: [
            {
                title: "CCAK",
                desc: "Pass Cloud Security Alliance CCAK certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/cloud-security-alliance/ccak",
            },
            {
                title: "CCSK",
                desc: "Pass Cloud Security Alliance CCSK certification online exam with CBTProxy, a 100% exam passing guarantee is assured. Pass in first attempt without relying on dumps & pay after you pass the exam.",
                link: "/certifications/cloud-security-alliance/ccsk",
            },
        ],
    },
];
export default function ChooseCertification(){
    return <div className="choose-certification">
        <div className="heading">Choose your cetification by:</div>
        <div className="certifications-container">
            <div className="group">
                {GROUP1.map(c=><CertificationCard data={c} color={"#00395C"} TICK={BLUE_TICK} ROUND_TICK={BLUE_ROUND_TICK} ARROW={BLUE_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP2.map(c=><CertificationCard data={c} color={"#0A9E62"} TICK={GREEN_TICK} ROUND_TICK={GREEN_ROUND_TICK} ARROW={GREEN_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP3.map(c=><CertificationCard data={c} color={"black"} TICK={BLACK_TICK} ROUND_TICK={BLACK_ROUND_TICK} ARROW={BLACK_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP4.map(c=><CertificationCard data={c} color={"#00395C"} TICK={BLUE_TICK} ROUND_TICK={BLUE_ROUND_TICK} ARROW={BLUE_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP5.map(c=><CertificationCard data={c} color={"#0A9E62"} TICK={GREEN_TICK} ROUND_TICK={GREEN_ROUND_TICK} ARROW={GREEN_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP6.map(c=><CertificationCard data={c} color={"black"} TICK={BLACK_TICK} ROUND_TICK={BLACK_ROUND_TICK} ARROW={BLACK_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP7.map(c=><CertificationCard data={c} color={"#00395C"} TICK={BLUE_TICK} ROUND_TICK={BLUE_ROUND_TICK} ARROW={BLUE_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP8.map(c=><CertificationCard data={c} color={"#0A9E62"} TICK={GREEN_TICK} ROUND_TICK={GREEN_ROUND_TICK} ARROW={GREEN_ARROW}/>)}
            </div>
            <div className="group">
                {GROUP9.map(c=><CertificationCard data={c} color={"black"} TICK={BLACK_TICK} ROUND_TICK={BLACK_ROUND_TICK} ARROW={BLACK_ARROW}/>)}
            </div>
        </div>
    </div>
}
