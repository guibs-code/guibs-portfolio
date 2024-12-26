import { About } from '@/About'
import { Portfolio } from '@/Portfolio'
import projects from '@/data/projects.json'

export function App() {
	console.log(projects)

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
