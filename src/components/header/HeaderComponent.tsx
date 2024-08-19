import React, {useState} from 'react';
import Image from 'next/image';
import ClientComponent from "@/components/header/ClientComponent";
import css from './Header.module.css';
import Link from "next/link";
import {ThemeCheckbox} from "@/components/themeCheckbox/ThemeCheckbox";
import {UserInfo} from "@/components/user/UserInfo";
import imgSrc from '../../../public/logo.png';


const HeaderComponent = () => {
    //const [query, setQuery] = useState<string>('');
    // onClick={searchTitle}
    return (
        <div className={css.header}>
                    <Link href={'/'} className={css.photoLogo}>
                        <Image src={imgSrc} className={css.photoLogo} alt="photo" role="presentation" />
                    </Link>
                    <Link href={'/movies'}>Movies</Link>
                    <Link href={'/genres'}>Genres</Link>
            <div>
                <input
                    type='text'
                    placeholder='Search...'
                   // value={query}
                    //onChange={handleChange}
                    className={css.search}
                />
                <button  className={css.btnSearch}>Search</button>
            </div>
            <ThemeCheckbox/>
            <UserInfo/>
        </div>
    );
};

export default HeaderComponent;