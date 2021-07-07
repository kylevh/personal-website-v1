import React from 'react'
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import PortfolioItems from '../Components/PortfolioItems';
import portfolios from '../Components/allPortfolios';
import {useState} from 'react'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
    const [categories, setCategories] = useState(allCategories); 
    const [portfolioItems, setPortfolioItems] = useState(portfolios); 

    const filter = (category) => {
        if(category === 'All')
        {
            setPortfolioItems(portfolios);
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setPortfolioItems(filteredData);
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolio'} span={'portfolio'} />
            </div>
            <div className="portfolios">
                <Categories filter={filter} categories= {categories}/>
                <PortfolioItems menuItem={portfolioItems}/>
            </div>
        </div>
    )
}

export default PortfolioPage
