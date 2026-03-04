import { getDictionary, type Locale } from '@/dictionaries';

interface PageProps {
	params: Promise<{ language: Locale }>;
}

export default async function ProfilePage({ params }: PageProps) {
	const { language } = await params;
	const dictionary = await getDictionary(language);

	return (
		<>
			<p className='text-lg'>
				<strong>页面标题:</strong> {dictionary.title}
			</p>
		</>
	);
}
