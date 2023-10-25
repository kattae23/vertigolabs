import React from 'react'
import Link from 'next/link'
import Button from '../button'
import ProjectCarousel from './project-carousel'

interface ProjectsContainerProps {
  basicInvestorTop?: boolean;
  investmentInformationAnalytics?: boolean;
  buttonLinkText: string;
  title?: string;
  filter?: 'onfunded' | 'funded' | 'finalized';
}

const ProjectsContainer = ({ basicInvestorTop = true, investmentInformationAnalytics = true, buttonLinkText, title }: ProjectsContainerProps) => {
  return (
    <section className='w-full h-auto relative flex flex-col p-4 mb-10'>
      {
        basicInvestorTop
          ? (
            <div className='w-full relative flex justify-center items-center'>
              <div className='w-[90%] h-auto absolute px-5 py-4 bg-white z-10 rounded-md'>
                <p className='font-normal text-xs text-center md:text-sm text-gray-700'>Griso Corp is a crowdfunding platform authorized and regulated by the <strong>CNMV</strong> and registered with <strong>the registration number 20</strong>. Please, carefully read the <Link className='text-blue-400 hover:underline' href='/informacion-basica-inversor'>Basic Investor Information</Link> before investing.</p>
              </div>
            </div>
            )
          : (
            <></>
            )
      }
      <div className='w-full py-5 flex justify-center items-center mt-20 text-center'>
        <h2 className='text-[26px] md:text-[36px] font-medium text-gray-800'>{title}</h2>
      </div>
      <ProjectCarousel {...{ investmentInformationAnalytics }} />
      <Button link='/oportunidades'>
        {buttonLinkText}
      </Button>
    </section>
  )
}

export default ProjectsContainer
