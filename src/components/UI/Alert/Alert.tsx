import {X} from 'lucide-react';
import './index.scss';
import { IProps } from '../../../Interfaces';



const Alert  = ({type,icon,title,description, children}:IProps) => {
    return (
        <div className={type}>
            <div className="alert-header">
                <div className="alert-title">
                    <span>
                        {icon}

                    </span>
                    <h4>{title}</h4>
                </div>

                <X className="close" size={25}/>
            </div>
            {children ? children : <p>{description}</p>}


        </div>
    )
}

export default Alert;