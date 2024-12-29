import {
	BrandGithub,
	BrandLinkedin,
	Envelope,
	FileText,
} from '@mynaui/icons-react'
import { Button } from '@/components/ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export function SocialButtons() {
	function copyEmail(): void {
		navigator.clipboard.writeText('guibs.email@gmail.com')
	}

	return (
		<div className="flex flex-wrap gap-3">
			<a href="https://github.com/guibs-code" target="_blank">
				<Button
					variant="outline"
					className="text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-200"
				>
					Github
					<BrandGithub className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</a>
			<a href="https://linkedin.com/in/guilhermebdasilva" target="_blank">
				<Button
					variant="outline"
					className="text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-200"
				>
					LinkedIn
					<BrandLinkedin className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</a>
			<AlertDialog>
				<AlertDialogTrigger>
					<Button
						variant="outline"
						className="text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-200"
					>
						Email
						<Envelope className="h-[1.2rem] w-[1.2rem]" />
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						Do you wish to copy my email into your clipboard?
					</AlertDialogHeader>
					<AlertDialogDescription>
						Click on "continue" to get my email address (guibs.email@gmail.com)
						copied into your clipboard :)
					</AlertDialogDescription>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction onClick={copyEmail}>Continue</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
			<a href="/public/files/Resume - Guilherme da Silva.pdf">
				<Button
					variant="outline"
					className="text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-200"
				>
					Resume
					<FileText className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</a>
		</div>
	)
}
