import './index.scss';

const Home = () => { 
    return (
    <div className="todo">
      <h1 className="todo__title">TODO LIST</h1>
      <form className="todo__field field">
        <div className="field__search-wrapper">
          <input className="field__input" placeholder="Search note..." />
            <svg className="field__search-icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7773 19.684L15.9056 14.812H15.8531C17.3547 13.0415 18.1136 10.7588 17.9709 8.44156C17.8282 6.12433 16.7951 3.95202 15.0876 2.37905C13.3801 0.806082 11.1306 -0.0456971 8.80958 0.0018919C6.48855 0.0494809 4.27583 0.992752 2.63427 2.63439C0.992706 4.27602 0.0494786 6.48885 0.00189181 8.80999C-0.045695 11.1311 0.806045 13.3808 2.37894 15.0883C3.95184 16.7958 6.12404 17.829 8.44117 17.9717C10.7583 18.1144 13.0408 17.3555 14.8113 15.8539C14.8113 15.8539 14.8113 15.8914 14.8113 15.9063L19.6831 20.7783C19.7527 20.8485 19.8356 20.9043 19.927 20.9424C20.0183 20.9804 20.1163 21 20.2152 21C20.3141 21 20.4121 20.9804 20.5034 20.9424C20.5948 20.9043 20.6777 20.8485 20.7473 20.7783C20.8242 20.7103 20.8862 20.6272 20.9296 20.5342C20.9731 20.4412 20.9969 20.3402 20.9997 20.2376C21.0025 20.135 20.9842 20.033 20.946 19.9377C20.9077 19.8425 20.8503 19.7561 20.7773 19.684ZM9.00276 16.4685C7.5204 16.4685 6.07133 16.0289 4.83879 15.2053C3.60625 14.3817 2.64561 13.2111 2.07833 11.8415C1.51106 10.4719 1.36263 8.96488 1.65183 7.51094C1.94102 6.05699 2.65485 4.72146 3.70303 3.67322C4.75122 2.62499 6.08669 1.91113 7.54057 1.62192C8.99445 1.33272 10.5014 1.48115 11.871 2.04845C13.2405 2.61575 14.411 3.57644 15.2346 4.80904C16.0581 6.04163 16.4977 7.49077 16.4977 8.9732C16.4977 9.95749 16.3038 10.9322 15.9272 11.8415C15.5505 12.7509 14.9985 13.5772 14.3025 14.2732C13.6065 14.9692 12.7803 15.5213 11.871 15.8979C10.9616 16.2746 9.98701 16.4685 9.00276 16.4685Z" fill="#6C63FF"/></svg>
        </div>
        <button className="button__all">ALL</button>
        <button className="button" type="submit"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="38" height="38" rx="5" fill="#6C63FF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.1249 8.5488C19.3387 8.91735 19.321 9.3762 19.0791 9.72705C18.3455 10.7915 17.916 12.0806 17.916 13.4733C17.916 17.1243 20.8757 20.084 24.5266 20.084C25.9194 20.084 27.2085 19.6545 28.2729 18.9208C28.6238 18.6791 29.0826 18.6613 29.4512 18.8751C29.8197 19.089 30.0319 19.4962 29.9961 19.9208C29.5191 25.567 24.7867 30 19.0178 30C12.9328 30 8 25.0672 8 18.9822C8 13.2133 12.433 8.48087 18.0792 8.00392C18.5038 7.96806 18.911 8.18024 19.1249 8.5488ZM16.1799 10.6346C12.7045 11.8157 10.2036 15.1073 10.2036 18.9822C10.2036 23.8502 14.1498 27.7964 19.0178 27.7964C22.8927 27.7964 26.1843 25.2955 27.3654 21.8202C26.4741 22.1232 25.5191 22.2875 24.5266 22.2875C19.6587 22.2875 15.7124 18.3413 15.7124 13.4733C15.7124 12.4809 15.8768 11.5258 16.1799 10.6346Z" fill="#F7F7F7"/></svg></button>
      </form>
      <ul className="todo__list">
        
        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-2" type="checkbox"/>
          <label className="todo-item__label" htmlFor="task-2"> Note #1 </label>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/><path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/><path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/></svg>
          </button>
        </li>

        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-2" type="checkbox"/>
          <label className="todo-item__label" htmlFor="task-2"> Note #2 </label>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/><path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/><path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/></svg>
          </button>
        </li>

        <li className="todo__item todo-item">
          <input className="todo-item__checkbox" id="task-2" type="checkbox"/>
          <label className="todo-item__label" htmlFor="task-2"> Note #3 </label>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.67272 5.99106L2 12.6637V16H5.33636L12.0091 9.32736M8.67272 5.99106L11.0654 3.59837L11.0669 3.59695C11.3962 3.26759 11.5612 3.10261 11.7514 3.04082C11.9189 2.98639 12.0993 2.98639 12.2669 3.04082C12.4569 3.10257 12.6217 3.26735 12.9506 3.59625L14.4018 5.04738C14.7321 5.37769 14.8973 5.54292 14.9592 5.73337C15.0136 5.90088 15.0136 6.08133 14.9592 6.24885C14.8974 6.43916 14.7324 6.60414 14.4025 6.93398L14.4018 6.93468L12.0091 9.32736M8.67272 5.99106L12.0091 9.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button className="todo-item__delete-button" aria-label="Delete" title="Delete">
           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/><path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/><path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/><path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/></svg>
          </button>
        </li>

      </ul>
    </div>
  )
}

export default Home




