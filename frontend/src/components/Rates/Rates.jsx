import React, {Fragment, useState, useEffect} from 'react';
import './Rates.scss';

export const Rates = function(props) {
    return (
      <section className="rates _container _row">
          <h3 className="rates__caption _col-12">Тарифы</h3>
          <div className="_col-12 _col-md-6 _col-lg-4">
              <div className="rates__item">
                  <div className="rates__title _01">VIP</div>
                  <div className="rates__price">15&nbsp;000&nbsp;₽</div>
                  <div className="rates__text-box">
                      <div className="rates__text _inf">экспертных оценок объекта</div>
                      <div className="rates__text _inf">видеопросмотров объекта</div>
                  </div>
                  <label className="button" htmlFor="modal-close">Купить</label>
              </div>
          </div>
          <div className="_col-12 _col-md-6 _col-lg-4">
              <div className="rates__item _middle">
                  <div className="rates__title _02">Стандарт</div>
                  <div className="rates__price">6&nbsp;000&nbsp;₽</div>
                  <div className="rates__text-box">
                      <div className="rates__text _numb" data-numb="7">экспертных оценок объекта</div>
                      <div className="rates__text _numb" data-numb="12">видеопросмотров объекта</div>
                  </div>
                  <label className="button" htmlFor="modal-close">Купить</label>
              </div>
          </div>
          <div className="_col-12 _col-md-6 _col-lg-4">
              <div className="rates__item">
                  <div className="rates__title _03">Базовый</div>
                  <div className="rates__price">2&nbsp;000&nbsp;₽</div>
                  <div className="rates__text-box">
                      <div className="rates__text _numb" data-numb="2">экспертных оценок объекта</div>
                      <div className="rates__text _numb" data-numb="3">видеопросмотров объекта</div>
                  </div>
                  <label className="button" htmlFor="modal-close">Купить</label>
              </div>
          </div>
      </section>
    );
}