"use client";

import { Content } from "@/components";
import { endpoint } from "@/lib/data";
import axios from "axios";
import { useEffect, useState } from "react";

interface IData {
	createdAt: string;
	title: string;
	data: string;
	images: string[];
	id: string;
}

export default function Home() {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<IData[]>();

	useEffect(() => {
		const getData = async () => {
			try {
				let result = await axios.get(endpoint);
				setContent(result.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		getData();
	}, []);

	console.log(
		content?.map(item => {
			return item.title;
		})
	);

	return (
		<main className='px-2 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-36 py-5'>
			<header className='w-full mb-10'>
				{content
					?.filter(item => item.title === "Polska w XVI wieku")
					.map((item, index) => (
						<div
							key={index}
							className='w-full flex-col flex text-5xl font-semibold items-center justify-center'>
							{item.title}
						</div>
					))}
			</header>
			{content
				?.filter(item => item.title !== "Polska w XVI wieku")
				.map((item, index) => (
					<Content
						key={index}
						title={item.title}
						content={item.data}
						images={item.images}
					/>
				))}
		</main>
	);
}
