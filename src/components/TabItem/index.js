import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeClassName = isActive ? 'active-tab' : ''

  const onClickTabButton = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-button ${activeClassName}`}
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
