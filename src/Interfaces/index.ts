import { ReactNode } from 'react';
import { AlertTypes } from '../types';

export interface IProps {
    type: AlertTypes,
    icon: ReactNode,
    title: string,
    description?:string,
    children?:ReactNode,

}

