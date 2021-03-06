import React,{ useState,useEffect } from "react"
import { Carousel } from 'antd-mobile';
import { getBanner } from "@/api/api.js"

function Swiper() {
    const [banner,setBanner] = useState([])
    useEffect(() => {
      getBanner().then((data) => {
        setBanner(data.banners)
      })
    },[])
    return (
        <>
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}>
                {banner.map(val => (
                    <a
                      key={val}
                      href={val.url}
                      style={{ display: 'inline-block', width: '100%' }}
                    >
                      <span style={{background:val.titleColor}}>{val.typeTitle}</span>
                      <img
                        src={val.pic}
                        alt={val.pic}
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                          window.dispatchEvent(new Event('resize'));
                        }}
                      />
                    </a>
                  ))}
            </Carousel>
        </>
    )
}

export default Swiper