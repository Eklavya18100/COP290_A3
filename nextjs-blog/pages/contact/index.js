import PageTemplate from "../../components/reusable/template/PageTemplate.tsx";
import st from "./contact.module.scss";

export default function Contact() {

  const contactData = [
    {
      imgUrl: "/icon/contact1.svg",
      desc: "4/F, Jockey Club Innovation Tower, The Hong Kong Polytechnic University, Hung Hom, Kowloon, Hong Kong.",
      type: "address",
    },
    {
      imgUrl: "/icon/contact2.svg",
      desc: "info@iprotect.hk",
      type: "email",
    },
    {
      imgUrl: "/icon/contact3.svg",
      desc: "9879 6414",
      type: "phone",
    },
  ];

  return (
    <PageTemplate outsideApp>
      <div className={st.mainContainer}>
        <div>
          <h1>Contact iProtect</h1>
          <p>Let's discuss how we can help you!</p>
        </div>
        <div>
          {contactData.map((data, index) => (
            <div key={index}>
              <img src={data.imgUrl} />
              {data.type == "email" ? (
                <a href={`mailto:${data.desc}`}>{data.desc}</a>
              ) : data.type == "phone" ? (
                <a href={`tel:${data.desc}`}>{data.desc}</a>
              ) : (
                <p>{data.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
