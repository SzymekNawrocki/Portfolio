'use client'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import  { SectionTitle } from '@/components/SectionTitle'

export default function page() {
	return (
		<div className='min-h-screen py-8'>
			<Hero/>
			<SectionTitle>Technologie, których używam</SectionTitle>
			<p className='text-center'>Kliknij aby dowiedzieć się więcej</p>
			<Technologies/>
		</div>
	)
}
