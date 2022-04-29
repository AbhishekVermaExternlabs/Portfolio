import React from 'react'
import './Award.css';

const Award = () => {
    return <div className='award_container d-flex align-items-center flex-wrap justify-content-between'>
        <div className='award_item'>
            <AwardItem
                year='2020'
                title='Best Frontend Developer'
                text='If you are already a front-end developer, well, pretend you are also wearing a pirate hat.'
            />
        </div>
        <div className='award_item'>
            <AwardItem
                year='2019'
                title='Best Coder'
                text='Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.'
            />
        </div>

    </div>
}

const AwardItem = ({ year, title, text }) => {
    return (
        <div className='single_award'>
            <div className='award_year'>{year}</div>
            <h6 className='award_title'>{title} -{" "} <span>{text}</span></h6>
        </div>
    )
}

export default Award