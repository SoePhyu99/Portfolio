import mobile from "../../assets/images/mobile-dev.png";
import web from "../../assets/images/web-dev.png";
import uiux from "../../assets/images/uiux-dev.png";
import { mobileTools, uiTools, webTools } from "../Tools/tools";
import { mobileStages, uiStages, webStages } from "../Tools/stages";

export interface Development {
	header: string;
	img: string;
	description: string;
	stages: Stages[];
	tools: string[];
}
interface Stages {
	source: string;
	name: string;
}

export const developments = [
	{
		header: "Web Development",
		img: web,
		description:
			"Our web development services involve crafting a professional and engaging website that highlights your expertise and offerings. We specialize in creating a user-friendly interface, ensuring seamless navigation and a positive user experience. Our team leverages cutting-edge technologies to build a responsive website that showcases your brand effectively. We provide ongoing support to ensure your website remains optimized and up-to-date, helping you attract and convert potential clients.",
		stages: webStages,
		tools: webTools,
	},
	{
		header: "Mobile Development",
		img: mobile,
		description:
			"Our mobile development services encompass building innovative and user-friendly mobile applications. We specialize in creating custom solutions that align with your unique business requirements. Our team utilizes the latest technologies and follows best practices to develop highly functional and visually appealing mobile apps for both iOS and Android platforms. We focus on delivering seamless user experiences and ensuring optimal performance. With a commitment to quality and ongoing support, we help your software company thrive in the mobile landscape.",
		stages: mobileStages,
		tools: mobileTools,
	},
	{
		header: "UI UX Design",
		img: uiux,
		description:
			"Our UI/UX design services prioritize creating exceptional user experiences and visually appealing interfaces. We specialize in crafting intuitive and engaging designs that align with your brand identity and target audience. Our team employs a user-centered approach, conducting thorough research and usability testing to ensure optimal usability and user satisfaction. With a focus on seamless navigation, information architecture, and visual aesthetics, we create designs that captivate users and enhance your digital products or services. Whether you need wireframes, prototypes, or complete design solutions, we are committed to delivering exceptional UI/UX designs that elevate your user's journey.",
		stages: uiStages,
		tools: uiTools,
	},
];
