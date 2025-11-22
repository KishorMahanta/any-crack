import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 sm:p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">1. Информация, которую мы собираем</h2>
              <p className="leading-relaxed">
                ANY-CRACK-IG не собирает, не хранит и не передает никакую личную информацию.
Введённые Instagram-имена обрабатываются локально в вашем браузере и не сохраняются на сервере или в базе данных.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">2.Отсутствие хранения данных</h2>
              <p className="leading-relaxed">
               Мы не ведём базы данных с информацией пользователей, запросами или сгенерированными паролями.
Вся обработка выполняется в реальном времени внутри вашего браузера и нигде не записывается.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">3.Платёжная информация</h2>
              <p className="leading-relaxed">
                Платежи обрабатываются безопасно через Razorpay, сторонний платёжный сервис.
Мы не собираем и не храним данные вашей банковской карты.
Вся платёжная информация обрабатывается напрямую Razorpay, согласно их политике конфиденциальности и стандартам PCI-DSS.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">4. Cookies и трекинг</h2>
              <p className="leading-relaxed">
                Это приложение не использует cookies, аналитику или какие-либо технологии отслеживания.
Ваша активность на сайте полностью приватна.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">5. Сторонние сервисы</h2>
              <p className="leading-relaxed">
               Мы используем следующие сторонние сервисы:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Razorpay:</strong> обработка платежей (действует их политика конфиденциальности)</li>
                <li><strong>Website</strong> работа приложения (не собирают пользовательские данные)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">6. Безопасность</h2>
              <p className="leading-relaxed">
                Поскольку мы не собираем и не храним никаких данных, риск утечки информации отсутствует.
Все «пароли» генерируются с помощью математических алгоритмов, без использования внешних источников данных.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">7. Конфиденциальность детей</h2>
              <p className="leading-relaxed">
                Сервис предназначен для пользователей старше 18 лет.
Мы не собираем данные несовершеннолетних.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">8. Изменения политики конфиденциальности</h2>
              <p className="leading-relaxed">
              Мы оставляем за собой право обновлять эту политику в любое время.
Все изменения будут опубликованы на этой странице вместе с новой датой обновления.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">9. Контакты</h2>
              <p className="leading-relaxed">
               Если у вас есть вопросы относительно политики конфиденциальности, свяжитесь с нами через форму обратной связи внутри приложения.
              </p>
            </section>
          </div>

          <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-800 rounded">
            <p className="text-sm text-gray-700">
              <strong>Last Updated:</strong> 2 ноября 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}