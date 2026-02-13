import clsx from 'clsx'
import './Select.scss'

const Select = ({value, onChange, className=''}) => {
    const classes = clsx('select-all', className);
    return (
        <select className={classes} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="all">ALL</option>
            <option value="true">Complete</option>
            <option value="false">Incomplete</option>
        </select>
    );
};

export default Select


