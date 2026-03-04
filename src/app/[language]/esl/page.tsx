import { getDictionary, type Locale } from '@/dictionaries';

interface PageProps {
	params: Promise<{ language: Locale }>;
}

export default async function ProfilePage({ params }: PageProps) {
	const { language } = await params;
	const dictionary = await getDictionary(language);
	
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">欢迎来到秋瑾的个人主页</h1>
			<div className="space-y-4">
				<p className="text-lg">
					<strong>页面标题:</strong> {dictionary.navbar.title}
				</p>
			</div>
		</div>
	);
}
