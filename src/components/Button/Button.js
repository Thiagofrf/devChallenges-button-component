import './Button.css'

const Button = ({variant, disableShadow, disabled, startIcon, endIcon, size, color }) => {

    function renderSwitch(color) {
        switch(color) { 
            case 'primary':
                return 'Primary';
            case 'secondary':
                return 'Secondary';
            case 'danger':
                return 'Danger';
            default: 
                return 'Default';     
        }
    }    

    return (
        <div className={`challengeButton ${variant || ''} ${(disableShadow && 'disableShadow') || ''} ${(disabled && 'disabled') || ''} ${(startIcon && 'startIcon') || ''} ${(endIcon && 'endIcon') || ''} ${size || ''} ${color || ''}`}>
            {(startIcon || endIcon) && 
                <img alt={startIcon}>
                </img>
            }
            {renderSwitch(color)}
        </div>
    )
}

export default Button;