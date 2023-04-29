import React, { useState, useEffect } from 'react';

import './styles.css'



const imageData = [
    {
        src: require('../images/img1.jpg'),
        title: "LOREM IPSUM !",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.',
    },
    {
        src: require('../images/img5.jpg'),
        title: "LOREM IPSUM 2",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.',
    },
    {
        src: require('../images/img3.jpg'),
        title: "LOREM IPSUM 3",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.',
    },
    {
        src: require('../images/img4.jpg'),
        title: "LOREM IPSUM 4",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.',
    },
    {
        src: require('../images/img2.jpg'),
        title: "LOREM IPSUM 5",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum inventore vitae atque, magnam dolore delectus ex neque debitis ipsa architecto libero cupiditate sint quae totam, provident, ipsum blanditiis nesciunt impedit.',
    },

];

function Viewer() {

    const [imgNumber, setImgNumber] = useState(0);
    const [isPlaying, setPlaying] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isPlaying) {
            intervalId = setInterval(() => {
                setImgNumber((prevIndex) =>
                    prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying]);

    const leftClick = () => {
        if (imgNumber === 0) {
            setImgNumber(imageData.length - 1);
        } else {
            setImgNumber(imgNumber - 1);
        }
        console.log(imgNumber);
    }

    const rightClick = () => {
        if (imgNumber === imageData.length - 1) {
            setImgNumber(0);
        } else {
            setImgNumber(imgNumber + 1);
        }
        console.log(imgNumber);
    }

    const imgClick = (i) => {
        setImgNumber(i)
    }


    const handlePlay = () => {
        setPlaying(!isPlaying)
    }

    return (
        <div>

            {/* delete this div */}
            <div className="catalog-item">
                <img
                    style={{ borderRadius: "70px" }}
                    src={imageData[imgNumber].src}
                    alt={imageData[imgNumber].title}
                    className="catalog-image"
                />
                <div className="l-side">
                    <h3>{imageData[imgNumber].title}</h3>
                    <p className="catalog-text" >{imageData[imgNumber].description}</p>
                </div>
            </div>

            <div className='miniview' >

                <div className='imgs' >

                    <p onClick={leftClick} ><i className="arrow left"></i></p>

                    {imageData.map((image, i) => {
                        return (
                            <div key={image.src} >
                                <img
                                    onClick={() => imgClick(i)}
                                    style={{ borderRadius: "30px" }}
                                    className='minImg'
                                    src={image.src}
                                    alt={image.title}
                                />
                            </div>
                        )
                    })}

                    <p onClick={rightClick} ><i className="arrow right"></i></p>

                </div>
                <div>
                    <img
                        className='play-pause'
                        src={isPlaying ? require('../images/pause.png') : require('../images/play.png')}
                        alt="imgs"
                        onClick={handlePlay}
                    />
                </div>


            </div>


        </div>
    );
}

export default Viewer;
