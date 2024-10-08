'use client'
import Hero from '@/components/Hero'
import Technologies from '@/components/Technologies'
import  { SectionTitle } from '@/components/SectionTitle'

export default function page() {
	return (
		<div className='min-h-screen py-8'>
			<Hero/>
			<SectionTitle>Technologies that I use</SectionTitle>
			<p className='text-center'>Click for more information</p>
			<Technologies/>
		</div>
	)
}
