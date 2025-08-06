import "./Footer.css";
import logo from "../../assets/img/logo.svg";

export function Footer() {
  return (
    <>
      <footer className="footer w-100">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="d-flex">
                <img alt="logo" src={logo} width="80rem" height="90rem"></img>
                <div className="d-flex flex-column pe-3">
                  <h5 className="pb-3">جمهورية مصر العربية</h5>
                  <p>وزاره التضامن الإجتماعي</p>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h5 className="pb-3">الخدمات الاكثر طلبا</h5>
              <p>خدمات الاسر البديلة</p>
              <p>خدمات الجمعيات</p>
            </div>
            <div className="col-2">
              <h5 className="pb-3">الدعم و المساعده</h5>
              <p>الاسئلة الشائعة</p>
              <p>الشكاوي والمقتراحات</p>
            </div>
            <div className="col-2">
              <h5 className="pb-3">المزيد</h5>
              <p>سياسة الخصوصية</p>
              <p>حقوق الطبع و النشر</p>
            </div>
            <div className="col-3">
              <h5 className="pb-3">تواصل معنا </h5>
              <p>
                <i className="fa-solid fa-location-dot"></i>ش المراغي - العجوزة
                - الجيزه 10
              </p>
              <p>
                <i className="fa-solid fa-phone-flip"></i>الخط الساخن لأبناء
                مصر:19828
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
