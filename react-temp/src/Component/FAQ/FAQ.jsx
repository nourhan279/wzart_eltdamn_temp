import Accordion from "react-bootstrap/Accordion";
import "../FAQ/FAQ.css";
export function FAQ() {
  return (
    <>
      <section>
        <div className="w-100">
          <div className="header d-flex me-5">
            <div className="flex-column">
              <h2>الأسئلة الشائعة</h2>
              <p>بوابة خدمات الشركات</p>
            </div>
          </div>
          <div className="accordion w-100 p-5 ">
            <Accordion defaultActiveKey="0">
              <Accordion.Item className=" mb-3" eventKey="0">
                <Accordion.Header>
                  ما هو الإطار التشريعي الحاكم لنظام الأسر البديلة؟
                </Accordion.Header>
                <Accordion.Body>
                  هذا نص تجريبي لا معنى له يستخدم لملء الفراغات في التصميم.
                  الهدف منه هو عرض شكل النص في الصفحة دون التركيز على مضمونه.
                  يمكن تكرار هذا النص عدة مرات حسب الحاجة.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  من هو المسئول الاول عن تحديد هوية الطفل المعثور علية و وكيفية
                  تحقيق ذلك؟
                </Accordion.Header>
                <Accordion.Body>
                  <div className="row ">
                    <div className="col-4">
                      <div className="card rounded-4 px-4 py-3">
                        <h5 className="pb-4">المسئول 1</h5>
                        <article className="pb-4">
                          هذا نص تجريبي لا معنى له يستخدم لملء الفراغات في
                          التصميم. الهدف منه هو عرض شكل النص في الصفحة دون
                          التركيز على مضمونه. يمكن تكرار هذا النص عدة مرات حسب
                          الحاجة.
                        </article>
                        <button className="btn btn-primary  rounded-5 mx-auto px-4">
                          <i className="fa-regular fa-user"></i> تسجيل
                        </button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card rounded-4 px-4 py-3">
                        <h5 className="pb-4">المسئول 1</h5>
                        <article className="pb-4">
                          هذا نص تجريبي لا معنى له يستخدم لملء الفراغات في
                          التصميم. الهدف منه هو عرض شكل النص في الصفحة دون
                          التركيز على مضمونه. يمكن تكرار هذا النص عدة مرات حسب
                          الحاجة.
                        </article>
                        <button className="btn btn-primary  rounded-5 mx-auto px-4">
                          <i className="fa-regular fa-user"></i> تسجيل
                        </button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="card rounded-4 px-4 py-3">
                        <h5 className="pb-4">المسئول 1</h5>
                        <article className="pb-4">
                          هذا نص تجريبي لا معنى له يستخدم لملء الفراغات في
                          التصميم. الهدف منه هو عرض شكل النص في الصفحة دون
                          التركيز على مضمونه. يمكن تكرار هذا النص عدة مرات حسب
                          الحاجة.
                        </article>
                        <button className="btn btn-primary rounded-5 mx-auto px-4">
                          <i className="fa-regular fa-user"></i> تسجيل
                        </button>
                      </div>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
