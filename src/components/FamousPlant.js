import { Swiper, SwiperSlide } from 'swiper/react';
import sabaraImg from '../images/sabra_story.png';
import 'swiper/css';
import 'swiper/css/pagination';


function FamousPlant() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slid-div d-inline-flex" >
                        <div className="image-plant"><img src={sabaraImg} alt="sabara" /></div>
                        <div className="info">
                            <h5>صبرا</h5>
                            <p>في قريةٍ بعيدة، تنمو نبتةٌ ساحرة تُدعى صبرا. بجمالها الخلاب وقوتها الداخلية، تلهم الناس وتُذَكِّرهم بأهمية الصمود والأمل. تتحول صبرا إلى رمزٍ للقوة والتكيف، وسرعان ما تنتشر شهرتها في الأرجاء. وسط الصعاب والتحديات، هل ستواصل صبرا تألقها وتحقيق الجمال الذي تعد به؟</p>
                            <button className="btn rounded-5 green-btn">للمزيد</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slid-div d-inline-flex" >
                        <div className="image-plant"><img src={sabaraImg} alt="sabara" /></div>
                        <div className="info">
                            <h5>صبرا</h5>
                            <p>في قريةٍ بعيدة، تنمو نبتةٌ ساحرة تُدعى صبرا. بجمالها الخلاب وقوتها الداخلية، تلهم الناس وتُذَكِّرهم بأهمية الصمود والأمل. تتحول صبرا إلى رمزٍ للقوة والتكيف، وسرعان ما تنتشر شهرتها في الأرجاء. وسط الصعاب والتحديات، هل ستواصل صبرا تألقها وتحقيق الجمال الذي تعد به؟</p>
                            <button className="btn rounded-5 green-btn">للمزيد</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slid-div d-inline-flex" >
                        <div className="image-plant"><img src={sabaraImg} alt="sabara" /></div>
                        <div className="info">
                            <h5>صبرا</h5>
                            <p>في قريةٍ بعيدة، تنمو نبتةٌ ساحرة تُدعى صبرا. بجمالها الخلاب وقوتها الداخلية، تلهم الناس وتُذَكِّرهم بأهمية الصمود والأمل. تتحول صبرا إلى رمزٍ للقوة والتكيف، وسرعان ما تنتشر شهرتها في الأرجاء. وسط الصعاب والتحديات، هل ستواصل صبرا تألقها وتحقيق الجمال الذي تعد به؟</p>
                            <button className="btn rounded-5 green-btn">للمزيد</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default FamousPlant;