import { ProjectCard } from '@/components/project-card'
import { ProjectProps } from './App'

interface AllProjects {
	projs: ProjectProps[]
}

export function Portfolio({ projs }: Readonly<AllProjects>) {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="title font-semibold text-3xl">Latest Projects</h2>
			<div id="cards" className="flex flex-col gap-4">
				{projs.map((proj: ProjectProps) => (
					<ProjectCard
						key={proj.id}
						name={proj.name}
						description={proj.description}
						img={proj.img}
						technologies={proj.technologies}
						id={proj.id}
					/>
				))}
			</div>
		</div>
	)
}