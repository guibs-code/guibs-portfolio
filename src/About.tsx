import { SocialButtons } from './components/social-buttons'

export function About() {
	return (
		<div className="flex flex-col gap-4 w-3/4">
			<h2 className="title font-semibold text-3xl">Hi, Guibs here!</h2>
			<p>
				I'm a Brazilian software engineer based in Toronto, Canada, who builds
				scalable, secure, and reponsive applications. I have a strong foundation
				in full-stack development and I'm adept in project management,
				problem-solving, teamwork, and communication skills.
			</p>
			<p>
				I have experience with technologies like React, Angular, Next.js,
				Express.js, Tailwind CSS, TypeScript, JavaScript, PostgreSQL, MongoDB,
				Oracle SQL, C#, .NET, and C++. I'm also skilled in testing tools like
				Jenkins and Jest, and have worked with Agile methodologies like Scrum
				and Kanban projects.
			</p>
			<SocialButtons />
		</div>
	)
}
