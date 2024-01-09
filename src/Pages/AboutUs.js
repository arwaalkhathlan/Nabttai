import Header from '../components/Header';
import Footer from '../components/Footer';
import brandIcon from '../images/icongray.jpg';
import { Container } from 'react-bootstrap';
function AboutUs() {
    return (
        <>
            <Header />
            <div className="about-section">
                <Container>
                    <div className='text-center py-5'>
                        <img src={brandIcon} alt='brandicon' />
                        <p className='paragraph'>نبتتي منصة ممتعة ومثيرة للاكتشاف والتعرف على عالم النباتات. نهدف
                            من خلالها إلى تقديم تجربة فريدة تمزج بين الجمال والمعرفة والتواصل مع
                            الطبيعة.
                        </p>
                        <p className='paragraph'>
                            نوفر لك فرصة طلب النباتات التي تحبها وترغب في إضافتها إلى مجموعتك
                            الخاصة. ولكن هناك شيئًا أكثر من ذلك، فنحن نسعى لخلق رابط مميز بينك
                            وبين النباتات، وذلك من خلال قصص قصيرة بسيطة.
                        </p>
                        <p className='paragraph'>
                            كل نبتة لديها قصتها الخاصة و من خلالها ستكتشف التفاصيل المثيرة
                            حول نشأة النبتة وتطورها وتأثيرها على البيئة المحيطة.
                        </p>
                        <p className='paragraph'>
                            تصفح موقعنا وستجد مجموعة متنوعة من النباتات الجميلة والمثيرة
                            للاهتمام. ستجد نصائح عن رعاية وزراعة كل نبتة، بالإضافة إلى معلومات
                            عن احتياجات الإضاءة والري والتربة المناسبة لنموها بشكل صحي.
                        </p>
                        <p className='paragraph'>
                            إذا كنت تحب الطبيعة وترغب في إحضار الجمال الطبيعي إلى منزلك، فإن
                            موقعنا هو المكان المثالي لك. تعال واكتشف العالم الساحر للنباتات من
                            خلال قصص قصيرة بسيطة واستمتع بتجربة تسوق فريدة.
                        </p>
                        <p className='paragraph'>
                            نحن نتطلع إلى خدمتك ومساعدتك في العثور على النباتات المثالية
                            والاستمتاع بالقصص الجميلة التي نرويها. انضم إلينا اليوم واستعد
                            للتعرف على عالم رائع من النباتات المدهشة.
                        </p>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
}
export default AboutUs;