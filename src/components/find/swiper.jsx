import React from "react"
import { Carousel } from 'antd-mobile';

function Swiper() {
     const data = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    return (
        <> 
            <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}>
                {data.map(val => (
                    <a
                      key={val}
                      href="http://www.alipay.com"
                      style={{ display: 'inline-block', width: '100%' }}
                    >
                      <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
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