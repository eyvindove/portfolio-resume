import GreetingSection from '@/components/greeting/GreetingSection'
import SkillSection from '@/components/skill/SkillSection'
import LanguageSection from '@/components/language/LanguageSection'
import WorkExperienceSection from '@/components/work-experience/WorkExperienceSection'
import EducationSection from '@/components/education/EducationSection'
import PlaygroundSection from '@/components/playground/PlaygroundSection'

const MainPage = () => {
  return (
    <>
      <GreetingSection />
      <SkillSection />
      <LanguageSection />
      <WorkExperienceSection />
      <EducationSection />
      <PlaygroundSection />
    </>
  )
}

export default MainPage
