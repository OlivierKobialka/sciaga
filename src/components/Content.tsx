"use client";

import Image from "next/image";

const Content = ({
	content,
	title,
	images,
}: {
	content?: string;
	title?: string;
	images?: string[];
}) => {
	return (
		<main className='mb-10'>
			<header className='text-left w-full text-4xl font-semibold'>
				{title}
			</header>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
				<section className='pb-3'>{content}</section>
				<section className='flex items-center justify-between'>
					{images && images.length > 0 && (
						<Image
							src={images[0]}
							width={500}
							height={500}
							alt={"title " + title}
							className='rounded-xl'
						/>
					)}
				</section>
			</div>
		</main>
	);
};

export default Content;
