import '@/index.css'

import { Analytics } from '@vercel/analytics/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { App } from '@/App'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Analytics />
		<main className="mx-auto mt-11 p-5 max-w-3xl font-geist h-screen text-neutral-900 dark:text-neutral-200">
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<Navbar />
				<App />
				<Footer />
			</ThemeProvider>
		</main>
	</StrictMode>
)
