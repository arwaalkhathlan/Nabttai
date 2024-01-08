import { Swiper, SwiperSlide } from 'swiper/react';
import sabaraImg from '../images/sabra_story.png';
import FeeImg from '../images/fe_story.jpeg';
import nseemImg from '../images/naseem.jpeg';
import 'swiper/css';
import 'swiper/css/pagination';

import { Link } from "react-router-dom";


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
                        <div className="image-plant"><img src={FeeImg} alt="Fee" /></div>
                        <div className="info">
                            <h5>فيّ</h5>
                            <p>جمال الصمود تأخذنا في رحلة مشوقة إلى عالمٍ ساحر، حيث تتعايش الطبيعة الخلابة مع روح الإصرار والأمل. تستعرض القصة قوة الصمود والتأقلم في وجه التحديات، وتجسد قوة العلاقات الإنسانية في تحقيق التغيير والنمو.</p>
                            
                            <Link to={`/PlantsStories/2`} className="btn rounded-5 green-btn" > للمزيد </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slid-div d-inline-flex" >
                        <div className="image-plant"><img src={sabaraImg} alt="sabara" /></div>
                        <div className="info">
                            <h5>صبرا</h5>
                            <p>في قريةٍ بعيدة، تنمو نبتةٌ ساحرة تُدعى صبرا. بجمالها الخلاب وقوتها الداخلية، تلهم الناس وتُذَكِّرهم بأهمية الصمود والأمل. تتحول صبرا إلى رمزٍ للقوة والتكيف، وسرعان ما تنتشر شهرتها في الأرجاء. وسط الصعاب والتحديات، هل ستواصل صبرا تألقها وتحقيق الجمال الذي تعد به؟</p>
                            <Link to={`/PlantsStories/1`} className="btn rounded-5 green-btn" > للمزيد </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slid-div d-inline-flex" >
                        <div className="image-plant"><img src={nseemImg} alt="nseem" /></div>
                        <div className="info">
                            <h5>نسييم</h5>
                            <p>في جنبات الغابة، اكتشف يوسف نَسيم، النبتة الصغيرة التي غيرت حياته، فما هي القصة المدهشة وراء هذا الاكتشاف؟</p>
                            <Link to={`/PlantsStories/3`} className="btn rounded-5 green-btn" > للمزيد </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default FamousPlant;