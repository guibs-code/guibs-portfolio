import { ModeToggle } from '@/components/mode-toggle'

export function Navbar() {
	return (
		<div className="flex justify-between mb-12" id="nav">
			<a href="#">
				<span className="text-xl font-bold">guibs</span>
			</a>
			<ModeToggle />
		</div>
	)
}
