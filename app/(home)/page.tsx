'use client'

import Hero from '@/components/Hero'
import About from '../about/page'
import Contact from '../contact/page'
import Projects from '../projects/page'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'



export default function page() {
	return (
		<div className='min-h-screen '>
			<Hero/>	
			
		</div>
	)
}
