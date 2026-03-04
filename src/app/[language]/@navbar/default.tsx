import { getDictionary, type Locale } from '@/dictionaries';

interface PageProps {
	params: Promise<{ language: Locale }>;
}

export default async function NavbarPage({ params }: PageProps) {
	const { language } = await params;
	const dictionary = await getDictionary(language);

	return (
		<div className='fixed top-0 left-1/2 -translate-x-1/2 w-300 h-12.5 z-50 flex items-center justify-center'>
			<p className='text-lg'>
				<strong>导航栏标题:</strong> {dictionary.navbar.title}
			</p>
		</div>
	);
}
