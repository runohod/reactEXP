import './Select.scss'

const Select = ({value, onChange, className=''}) => {
    return (
        <select className={`select-all ${className}`} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="all">ALL</option>
            <option value="true">Complete</option>
            <option value="false">Incomplete</option>
        </select>
    );
};

export default Select