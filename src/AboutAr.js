import HeaderAr from "./components/HeaderAr";
import LandingAr from "./components/LandingAr";
import FooterAr from "./components/FooterAr";

export default function About() {
  return (
    <div>
      <HeaderAr />
      <LandingAr />
      <div className="wide-father">
        <div className="Services text-center d-column align-items-center pb-lg-5">
          <h3 className="fw-bold pt-5 pt-lg-5">عن الشركة</h3>
        </div>
        <div className="container">
          <div className="row" style={{ textAlign: "right" }}>
            <div className="col-lg-4 mb-lg-5 mt-4">
              <div className="card card-about">
                <div className="card-body text-right">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    إدارة سفر الأعمال لدينا
                  </h5>
                  <p className="card-text">
                    أكثر من 100 شركة من عملاء المحفظة. <br />
                    Bravoo متخصص في سفر الشركات. المبيعات للشركات يولد العملاء
                    حوالي 85٪ من الدخل الإجمالي للوكالة. نحن هي المورد الرئيسي
                    لخدمات سفر الشركات لأكثر من 150 شركة عميلة (ومتنامية) من
                    بينهم بعض من أكثرهم شركات عراقية مهمة ومتعددة الجنسيات.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-5 mt-4">
              <div className="card card-about">
                <div className="card-body">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    ماهي شركة برافو؟
                  </h5>
                  <p className="card-text">
                    إنه نظام مصمم حديثًا يوفر B2B-B2C-B2E. <br />
                    يشمل جميع الميزات التكنولوجية الحديثة في التنمية العلوم
                    السياحية والحجز الجوي المستعمل وحجز الفنادق و برامج سياحية.
                    <br />
                    تم توظيف العديد من الخبراء في برافو من الخمسة القارات
                    للمساعدة في طريقة ازدهار الرفاهية لـ سائح عراقي.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-5 card-about-parent mt-4">
              <div className="card card-about">
                <div className="card-body pb-5 line-about-card">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    لماذا برافو؟
                  </h5>
                  <p className="card-text">
                    • تعمل شركة برافو مع أكبر شركات حجز الفنادق. 1.500.000 فندق
                    بالإضافة إلى 5000 فندق عبر ديرست عقود مع برافو.
                    <br />
                    • تقديم برامج سياحية سنوية.
                    <br />
                    •قم بتوفير منصة White Label باستخدام اسم الشركة لزيادة
                    المبيعات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAr />
    </div>
  );
}
