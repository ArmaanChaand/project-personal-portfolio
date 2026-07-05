import type { Metadata } from "next";

interface StaticMetadataProps {
	title: string;
	description: string;
	pagePath: string;
	keywords?: string[];
	og_image?: string;
	og_type?: "website" | "article";
}

/**
 *
 * @param title Meta title upto 65 characters
 * @param description Meta description in 80-155 characters
 * @param pagePath Current page with forward slash — "/page/path"
 * @param keywords Releant meta keywords in array of string
 * @returns
 */
export default function generateStaticMetadata({
	title,
	description,
	pagePath,
	keywords,
	og_image,
	og_type,
}: StaticMetadataProps): Metadata {
	return {
		title: title,
		description: description,
		...(keywords && { keywords: keywords }),
		openGraph: {
			// Static
			locale: "en_US",
			siteName: "Armaan Chaand",
			type: og_type ?? "website",

			// Dynamic
			title: title,
			description: description,
			url: pagePath,
			...(og_image && { images: [og_image] }),
		},
		alternates: {
			canonical: pagePath,
		},
	};
}