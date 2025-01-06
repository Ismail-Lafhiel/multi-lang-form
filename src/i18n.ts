import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          formTitle: "Contact Form",
          fname: "First Name",
          lname: "Last Name",
          mobile: "Mobile",
          address: "Address",
          message: "Message",
          save: "Save",
          fnamePlaceholder: "Enter your first name",
          lnamePlaceholder: "Enter your last name",
          mobilePlaceholder: "Enter your mobile number",
          addressPlaceholder: "Enter your address",
          messagePlaceholder: "Enter your message",
        },
      },
      ar: {
        translation: {
          formTitle: "استمارة الاتصال",
          fname: "الاسم الأول",
          lname: "الاسم الأخير",
          mobile: "رقم الهاتف",
          address: "العنوان",
          message: "الرسالة",
          save: "حفظ",
          fnamePlaceholder: "أدخل الاسم الأول",
          lnamePlaceholder: "أدخل الاسم الأخير",
          mobilePlaceholder: "أدخل رقم الهاتف",
          addressPlaceholder: "أدخل العنوان",
          messagePlaceholder: "أدخل الرسالة",
        },
      },
    },
    lng: "en", // Set the default language
    fallbackLng: "en", // Fallback language

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
