import React from "react";
import "./Additional.scss";

export const Additional = function () {
  return (
    <section className="additional _container _row">
      <h3 className="additional__caption _col-12">Дополнительные услуги</h3>
      <div className="_col-12 _col-md-6 _col-lg-4">
        <div className="additional__item">
          <div className="additional__title">Медиация</div>
          <div>
            <span className="additional__price">20&nbsp;000&nbsp;₽</span>
            /5&nbsp;объектов
          </div>
          <div className="additional__text">
            Медиация&nbsp;&mdash; это технология при которой эксперты
            электронного агентства недвижимости ведут переговоры
            с&nbsp;собственником по&nbsp;снижению цены на&nbsp;основании
            экспертной оценки стоимости объекта, а&nbsp;так&nbsp;же учитывая
            возможности и&nbsp;пожелания потенциального покупателя.
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4">
        <div className="additional__item">
          <div className="additional__title">Экспертная оценка объекта</div>
          <div>
            <span className="additional__price">800&nbsp;₽</span>/1&nbsp;объект
          </div>
          <div className="additional__text">
            Экспертная оценка стоимости объекта&nbsp;&mdash; это возможность
            узнать справедливую цену за&nbsp;интересующий вас объект, сэкономив
            ваше время и&nbsp;деньги.
            <br />
            <br />
            Анализ проводится на&nbsp;основе истории совершенных сделок
            по&nbsp;купли продажи аналогичных объектов недвижимости, а&nbsp;так
            как&nbsp;же на&nbsp;основании цен похожих квартир которые сейчас
            продаются на&nbsp;рынке Вашего региона.
            <br />
            <br />
            При составлении отчета так&nbsp;же учитывается состояние дома
            и&nbsp;ремонта самой квартиры, наличие мебели и&nbsp;техники
            и&nbsp;многих других параметрах.
          </div>
        </div>
      </div>
      <div className="_col-12 _col-md-6 _col-lg-4">
        <div className="additional__item">
          <div className="additional__title">Видепросмотр объекта</div>
          <div>
            <span className="additional__price">200&nbsp;₽</span>/1&nbsp;объект
          </div>
          <div className="additional__text">
            Видеопросмотр&nbsp;&mdash; это возможность получить подробную видео
            запись интересующего объекта недвижимости на&nbsp;мобильное
            устройство или компьютер через личный кабинет не&nbsp;выходя
            из&nbsp;дома.
            <br />
            <br />
            Видеопросмотр производится экспертом электронного агентства
            недвижимости и&nbsp;дает Вам возможность получить максимально
            подробную информацию, и&nbsp;принять решение о&nbsp;необходимости
            очного просмотра.
          </div>
        </div>
      </div>
    </section>
  );
};
