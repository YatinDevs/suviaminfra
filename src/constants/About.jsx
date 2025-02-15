import { Crown, Lightbulb, Globe, Users } from "lucide-react";

import user1 from "../../public/assets/profile-pictures/user1.jpg";
import user2 from "../../public/assets/profile-pictures/user2.jpg";
import user3 from "../../public/assets/profile-pictures/user3.jpg";
import user4 from "../../public/assets/profile-pictures/user4.jpg";
import user5 from "../../public/assets/profile-pictures/user5.jpg";
import user6 from "../../public/assets/profile-pictures/user6.jpg";
export const leadersData = [
  {
    name: "Punam Jagdish Marathe",
    title: "Directors",
    icon: <Crown className="w-10 h-10 text-blue-500" />,
    image: user1,
    description:
      "Punam leads Suviam with strategic vision, ensuring long-term growth and innovation.",
  },
  {
    name: "Priyanka Mukund Kale",
    title: "Directors",
    icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
    image: user2,
    description:
      "Priyanka drives Suviam’s creative initiatives, crafting innovative solutions and brand storytelling.",
  },
  {
    name: "Ajinkya Prakash Patil",
    title: "CEO",
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    image: user3,
    description:
      "Ajinkya steers Suviam’s operations and strategy, ensuring sustainable business growth.",
  },
  {
    name: "Mayur Prakash Patil",
    title: "Technical and Accounts Advisor",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: user4,
    description:
      "Mayur oversees technical and financial strategies, ensuring efficiency and accuracy.",
  },
  {
    name: "Lalchand Shankar Pawar",
    title: "Manager",
    icon: <Users className="w-10 h-10 text-blue-500" />,
    image: user5,
    description:
      "Lalchand ensures seamless daily operations, managing resources and team performance.",
  },
];

export const AboutUs = {
  title: "Suviam",
  description: "Learn more about our company.",
  companyInfo: {
    title: "About Us",
    description_para1: `SUVIAM INFRA PRIVATE LIMITED is a leading construc􀆟on company
specializing in irriga􀆟on projects that enhance water management
through canals and Dams. `,
    description_para2: `Established in 2023, we have built a strong
reputa􀆟on for delivering innova􀆟ve and sustainable solu􀆟ons tailored to
meet the unique needs of our clients (Water Resource Department, Govt.
Of Maharashtra).`,
  },
  productRange: {
    title: "Product Range:",
    description: "We offer a comprehensive range of RCC pipes, including:",
    products: [
      {
        title: "Plain And Socket Type RCC Pipes:",
        description:
          "Suitable for various cross drainage and sewerage applications.",
      },
      {
        title: "Reinforced RCC Pipes Various Classes:",
        description:
          "Designed for high-pressure applications and heavy loads (NP3 and NP4 Class).",
      },
    ],
  },
  facilities: {
    title: "Facilities:",
    description: `Our modern manufacturing facility is equipped with cutting-edge technology and adheres to strict quality control measures. We utilize advanced machinery and processes to ensure that every pipe meets industry standards and customer specifications.`,
  },
  specializedArticles: {
    title: "Specialized Articles:",
    description: `Custom-designed solutions for unique project requirements, including Box Culverts, Ready-to-Install Manhole Chambers, U-Shape Drains, etc.`,
  },
  qualityAssurance: {
    title: "Quality Assurance:",
    description: `Quality is at the core of our operations. Our products undergo rigorous testing and inspection to ensure they meet or exceed the standards set by relevant regulatory bodies.`,
  },
  sustainabilityCommitment: {
    title: "Sustainability Commitment:",
    description: `At SUVIAM INFRA PRIVATE LIMITED, we are committed to sustainable manufacturing practices. Our RCC pipes are designed to minimize environmental impact while maximizing performance and longevity.`,
  },
  marketReach: {
    title: "Market Reach:",
    description: `We serve a diverse clientele, including government agencies, construction firms, and civil engineering contractors across North Maharashtra. Our reputation for reliability and customer service has positioned us as a trusted partner in the industry.`,
  },
  futureVision: {
    title: "Future Vision:",
    description: `As we look to the future, SUVIAM INFRA PRIVATE LIMITED aims to expand our product offerings and enhance our market presence. We are dedicated to continuous improvement and innovation, ensuring we remain at the forefront of the RCC pipe manufacturing industry.`,
  },
};
