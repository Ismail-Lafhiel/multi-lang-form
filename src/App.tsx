import { useTranslation } from "react-i18next";
import "./i18n";
import "./App.css";
const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full">
        {/* Language Switcher */}
        <div className="flex justify-center space-x-4 mb-10 rtl:space-x-reverse">
          <button
            onClick={() => changeLanguage("en")}
            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
              ${i18n.language === 'en'
                ? 'bg-white text-indigo-600 shadow-lg ring-2 ring-indigo-600'
                : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
              }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage("ar")}
            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ease-in-out transform hover:scale-105
              ${i18n.language === 'ar'
                ? 'bg-white text-indigo-600 shadow-lg ring-2 ring-indigo-600'
                : 'bg-white/80 text-gray-600 hover:bg-white hover:shadow-md'
              }`}
          >
            العربية
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {t("formTitle")}
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("fname")}
                </label>
                <input
                  type="text"
                  name="fname"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={t("fnamePlaceholder")}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("lname")}
                </label>
                <input
                  type="text"
                  name="lname"
                  className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder={t("lnamePlaceholder")}
                />
              </div>
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("mobile")}
              </label>
              <input
                type="tel"
                name="mobile"
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 outline-none"
                placeholder={t("mobilePlaceholder")}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("address")}
              </label>
              <input
                type="text"
                name="address"
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 outline-none"
                placeholder={t("addressPlaceholder")}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t("message")}
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-4 rounded-xl hover:shadow-lg transform transition-all duration-300 ease-in-out hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 font-medium"
            >
              {t("save")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
