import './style.scss'
import { ISectionTitleProps } from '../../components/SectionTitle/interface'

const SectionTitle = ({ subtitle, title }: ISectionTitleProps) => {
  return (
    <>
      <h4 className="section-title__subtitle">{subtitle}</h4>
      <h2 className="section-title__title">{title}</h2>
    </>
  )
}

export default SectionTitle
