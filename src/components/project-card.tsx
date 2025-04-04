import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { ProjectProps } from '@/App'

export function ProjectCard({
	id,
	name,
	description,
	img,
	url,
	technologies,
}: Readonly<ProjectProps>) {
	return (
		<Card className="flex">
			<div className="hidden md:block w-1/3 space-y-1.5 p-6 pr-0 m-auto">
				<a href={url} target="_blank">
					<img
						src={img}
						className="rounded-lg"
						style={{ width: '218px', height: '163.5px' }}
						alt={`${name} project screenshot`}
					/>
				</a>
			</div>
			<div className="w-full md:w-2/3">
				<CardHeader className="gap-1 pb-4">
					<CardTitle>{name}</CardTitle>
					<ScrollArea className="whitespace-nowrap">
						<div className="flex space-x-1">
							{technologies.map((tech) => {
								return (
									<Badge key={id} variant="outline">
										{tech}
									</Badge>
								)
							})}
							<ScrollBar orientation="horizontal" />
						</div>
					</ScrollArea>
				</CardHeader>
				<CardContent>
					<p>{description}</p>
				</CardContent>
			</div>
		</Card>
	)
}
