"use client"
import css from './UserInfo.module.css'
import imgSrc from "*.png";
import Image from "next/image";
import React from "react";
import imgSrcUser from '../../../public/avatar.jpg';

const UserInfo = () => {
    return (
        <div className={css.user}>
            <Image src={imgSrcUser} className={css.photoUser} alt="photo" role="presentation" />
        </div>
    );
};

export {UserInfo};