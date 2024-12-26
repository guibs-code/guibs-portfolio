import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function ProjectCard({ projName, projDesc, projImg, projTech }) {
	return (
		<Card className="flex">
			<div className="w-1/3 space-y-1.5 p-6 pr-0 m-auto">
				<img
					src={projImg}
					className="rounded-lg"
					alt={`${projName} project screenshot`}
				/>
			</div>
			<div className="w-2/3">
				<CardHeader className="gap-1 pb-4">
					<CardTitle>{projName}</CardTitle>
					<div className="flex gap-1">
						{projTech &&
							projTech.map((tech) => {
								return <Badge variant="outline">{tech}</Badge>
							})}
					</div>
				</CardHeader>
				<CardContent>
					<p>{projDesc}</p>
				</CardContent>
			</div>
		</Card>
	)
}
