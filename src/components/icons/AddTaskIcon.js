import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const AddTaskIcon = React.memo(({ onClick }) => {
    const theme = useTheme();

    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    let fill = isHovered ? theme.global.white.value : theme.global.brand.value;

    return (
        <div onClick={onClick} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: `2px solid ${theme.global.brand.value}`,
            padding: 14,
            borderRadius: 200,
            cursor: "pointer",
            backgroundColor: isHovered ? theme.global.brand.value : theme.global.white.value,
            fill: fill
        }}
             onMouseOver={handleMouseOver}
             onMouseOut={handleMouseOut}
        >
            <svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path  fillRule="evenodd" clipRule="evenodd" d="M24 1.43011C24 0.657471 23.5523 0.157471 23 0.157471C22.4478 0.157471 22 0.657471 22 1.43011V22.1574H1.27273C0.48584 22.1574 0 22.6051 0 23.1574C0 23.7097 0.5 24.1574 1.27273 24.1574H22V44.8847C22 45.6716 22.4478 46.1574 23 46.1574C23.5523 46.1574 24 45.6574 24 44.8847V24.1574H44.7273C45.4999 24.1574 45.9999 23.7097 45.9999 23.1574C45.9999 22.6051 45.4999 22.1574 44.7273 22.1574H24V1.43011Z"
                       fill={fill}
                />
            </svg>
        </div>
    );
});

export default AddTaskIcon;