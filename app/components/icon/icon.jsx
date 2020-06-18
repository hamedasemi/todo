import React from 'react';

import styles from './icon.css';

const Icon = ({name, className, color, size}) => {
    return (
        <svg className={`${className} ${styles.icon}`} fill={color} width={size} height={size}>
            <use xlinkHref={`../../../assets/icons/icons.svg#${name}`} />
        </svg>
    );
}

export default Icon;