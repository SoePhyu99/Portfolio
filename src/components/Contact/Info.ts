import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { IconType } from "react-icons";

export const infos = [
	{
		icon: AiOutlinePhone as IconType,
		name: "Phone",
		value: "+95 912 345 6789",
	},
	{
		icon: HiOutlineMail as IconType,
		name: "Email",
		value: "sample@gmail.com",
	},
	{
		icon: HiOutlineLocationMarker as IconType,
		name: "Location",
		value: "Mogoke, Mandalay, Myanmar",
	},
];
