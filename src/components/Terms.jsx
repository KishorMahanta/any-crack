import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">1. Только в образовательных целях</h2>
              <p className="leading-relaxed">
               ANY-CRACK-IG — это имитационный обучающий инструмент, созданный исключительно для развлечения и учебных целей.
Это приложение НЕ взламывает реальные пароли, не получает доступ к настоящим аккаунтам и не нарушает какие-либо системы безопасности.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">2. Нет доступа к реальным паролям</h2>
              <p className="leading-relaxed">
                Все «пароли», отображаемые в этом приложении, генерируются случайным образом на основе математических алгоритмов.
Они не являются реальными паролями и не имеют никакой связи с настоящими аккаунтами Instagram или пользовательскими данными.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">3. Соответствие законам</h2>
              <p className="leading-relaxed">
               Пользователям запрещено использовать этот инструмент или его концепцию для любых незаконных действий, включая, но не ограничиваясь:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Несанкционированным доступом к компьютерным системам или аккаунтам</li>
                <li>Кражей личности или выдачей себя за другого</li>
                <li>Нарушением приватности</li>
                <li>Любой формой киберпреступлений</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">4. Платные услуги</h2>
              <p className="leading-relaxed">
               Функция «раскодировать пароль» является симулированной премиум-услугой.
Обработка платежей осуществляется через Razorpay.
Выдаваемый «раскодированный пароль» также генерируется случайным образом и не связан с реальными данными.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">5. Отказ от ответственности</h2>
              <p className="leading-relaxed">
                Создатели и операторы ANY-CRACK-IG не несут ответственности за любое неправильное использование этого инструмента.
Используя сервис, вы подтверждаете, что понимаете его исключительно образовательный характер и соглашаетесь не использовать его в незаконных целях.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">6.Возрастное ограничение</h2>
              <p className="leading-relaxed">
               Пользователь должен быть 18 лет или старше, чтобы использовать этот сервис.
Используя этот инструмент, вы подтверждаете, что соответствуете этому возрастному требованию.
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