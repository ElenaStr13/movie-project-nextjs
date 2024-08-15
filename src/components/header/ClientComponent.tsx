'use client'

import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

import css from './nav-link.css';

type IProps = {
    path: string,
    children: React.ReactNode,
}

const ClientComponent: FC<IProps> = ({path, children}) => {

    let pathname = usePathname();
    return (
        <div>
            <Link href={path} className={pathname === path ? 'active' : 'noActive'}>
                {children}
            </Link>
        </div>
    );
};

export default ClientComponent;