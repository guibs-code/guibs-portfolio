import { About } from '@/About'
import { Portfolio } from '@/Portfolio'
import projData from '@/data/projects.json'

export interface ProjectProps {
	id: number
	name: string
	description: string
	img: string
	url: string
	technologies: string[]
}

export function App() {
	const projects: ProjectProps[] = projData

	return (
		<div className="flex flex-col gap-11">
			<div id="about" className="py-5">
				<About />
			</div>
			<div id="portfolio">
				<Portfolio projs={projects} />
			</div>
		</div>
	)
}
