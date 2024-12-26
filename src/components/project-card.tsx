import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProjectProps } from '@/App'

export function ProjectCard({
	id,
	name,
	description,
	img,
	technologies,
}: Readonly<ProjectProps>) {
	return (
		<Card className="flex">
			<div className="w-1/3 space-y-1.5 p-6 pr-0 m-auto">
				<img
					src={img}
					className="rounded-lg"
					alt={`${name} project screenshot`}
				/>
			</div>
			<div className="w-2/3">
				<CardHeader className="gap-1 pb-4">
					<CardTitle>{name}</CardTitle>
					<div className="flex gap-1">
						{technologies.map((tech) => {
							return (
								<Badge key={id} variant="outline">
									{tech}
								</Badge>
							)
						})}
					</div>
				</CardHeader>
				<CardContent>
					<p>{description}</p>
				</CardContent>
			</div>
		</Card>
	)
}
