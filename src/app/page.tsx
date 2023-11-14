"use client";

import { Content } from "@/components";
import { endpoint } from "@/lib/data";
import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface IData {
	createdAt: string;
	name: string;
	data: string;
	images: string[];
	id: number;
}

export default function Home() {
	const [content, setContent] = useState<IData[]>();
	const [subject, setSubject] = useState<string>("historia");

	useEffect(() => {
		const getData = async () => {
			try {
				let result = await axios.get(endpoint + subject);
				setContent(result.data);
			} catch (error) {
				alert("Error fetching data");
			}
		};

		getData();
	}, [subject]);

	return (
		<main className='px-2 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-36 py-5'>
			<header className='w-full mb-10 flex items-center justify-between'>
				{content &&
					content
						.filter(item => item.id === 1)
						.map((item, index) => (
							<div
								key={index}
								className='w-full flex-col flex text-5xl font-semibold items-center justify-center'>
								{item.name}
							</div>
						))}
				<div className='flex items-center justify-start gap-2'>
					<button
						className={clsx(
							"bg-gray-200 px-2 py-1 rounded-xl",
							subject === "historia" &&
								"bg-gray-400 px-2 py-1 rounded-xl"
						)}
						onClick={() => {
							setSubject("historia");
						}}>
						Historia
					</button>
					<button
						className={clsx(
							"bg-gray-200 px-2 py-1 rounded-xl",
							subject === "biologia" && "bg-gray-400"
						)}
						onClick={() => {
							setSubject("biologia");
						}}>
						Biologia
					</button>
				</div>
			</header>
			{content &&
				content
					.filter(item => item.id !== 1)
					.map((item, index) => (
						<Content
							key={index}
							title={item.name}
							content={item.data}
							images={item.images}
						/>
					))}
		</main>
	);
}
