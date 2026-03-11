import clsx from 'clsx'
import styles from './Select.module.scss'

const Select = ({value, onChange, className=''}) => {
    const classes = clsx(styles.selectAll, className);
    return (
        <select className={classes} value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="all">ALL</option>
            <option value="true">Complete</option>
            <option value="false">Incomplete</option>
        </select>
    );
};

export default Select


