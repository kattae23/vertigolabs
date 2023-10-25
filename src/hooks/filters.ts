import { ProjectInfo } from '@/components/home/projects/project-carousel'
import { FilterType } from '@/components/home/projects/projects'

export const filterProjects = <T extends ProjectInfo>(arr: T[], filter: FilterType['filter']) => {
  return arr.filter(project => project.phase === filter)
}
