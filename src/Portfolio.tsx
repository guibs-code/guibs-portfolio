import { ProjectCard } from '@/components/project-card'
import { Key } from 'react'

export function Portfolio({ projs }) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="title font-semibold text-3xl">Latest Projects</h2>
			<div id="cards" className="flex flex-col gap-4">
				{projs.map(
					(proj: {
						id: Key | null | undefined
						name: unknown
						description: unknown
						img: unknown
						tech: unknown
					}) => (
						<ProjectCard
							key={proj.id}
							projName={proj.name}
							projDesc={proj.description}
							projImg={proj.img}
							projTech={proj.technologies}
						/>
					)
				)}
			</div>
		</div>
	)
}
