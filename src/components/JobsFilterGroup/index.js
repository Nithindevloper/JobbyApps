import ProfileDetails from '../ProfileDetails'
import './index.css'

const JobsFilterGroup = props => {
  const getEmploymentTypeList = () => {
    const {employmentTypesList, updateEmploymentTypesChecked} = props

    return employmentTypesList.map(employ => {
      const updateTypeslist = () =>
        updateEmploymentTypesChecked(employ.employmentTypeId)

      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={updateTypeslist}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label htmlFor={employ.employmentTypeId} className="check-label">
            {employ.label}
          </label>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type of Employment</h1>
      <ul className="salary-range-container">{getEmploymentTypeList()}</ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {updateSalaryRangeId, salaryRangesList, salaryRange} = props

    return salaryRangesList.map(salary => {
      const onChangeRange = () => updateSalaryRangeId(salary.salaryRangeId)

      const isChecked = salary.salaryRangeId === salaryRange

      return (
        <li className="checkbox-list-items" key={salary.salaryRangeId}>
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
            checked={isChecked}
            onChange={onChangeRange}
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default JobsFilterGroup
