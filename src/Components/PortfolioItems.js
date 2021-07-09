import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa'

function PortfolioItems({ menuItem }) {
    return (
        <div className="portfolios-container">
            {
                menuItem.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    {item.link1 ?
                                        <a href={"http://" + item.link1} target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="portfolioIcon gh" />
                                        </a>
                                        :
                                        <div></div>
                                    }
                                    {item.link2 ?

                                        <a href={"http://" + item.link2} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt className="portfolioIcon ext" />
                                        </a>
                                        :
                                        <div></div>
                                    }
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                })
            }
        </div>
    )
}

export default PortfolioItems
