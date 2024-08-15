import React from 'react';
import ClientComponent from "@/components/header/ClientComponent";
import css from './Header.module.css';
import Link from "next/link";


const HeaderComponent = () => {
    return (
        <div className={css.header}>
            <ul>
                <li>
                    <ClientComponent path={'/'}>home</ ClientComponent>
                </li>
                <li>
                    <ClientComponent path={'/movies'}>movies page</ClientComponent>
                </li>
                <li>
                    <ClientComponent path={'/genres'}>genres page</ClientComponent>
                </li>
                {/*<li>*/}
                {/*    <ClientComponent path={'/meals'}>meals page</ClientComponent>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default HeaderComponent;