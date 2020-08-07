import React, { Fragment, useEffect } from 'react';
import ReactDom from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal');

export const Modal = function(props) {
  const element = document.createElement('div');

  useEffect(function() {
    modalRoot.appendChild(element);

    return function() {
      modalRoot.removeChild(element);
    }
  }, [null]);

  function renderModal() {
    return (
      <Fragment>
        <aside className="modal">
          <label className="modal__bg" htmlFor="modal-close">
            <span className="_v-hidden">Закрыть форму</span>
          </label>
          <div className="_col-12 modal__form-box">
            <div className="_row modal__form _p-n">
              <div className="_col-12 modal__caption">Произошла ошибка</div>
              <div className="_col-12 modal__text">Попробуйте повторить попытку позже.</div>
              <div className="_col-12 modal__input-box">
                <label className="button modal__button" htmlFor="modal-close">Хорошо</label>
              </div>
            </div>
          </div>
          <label className="modal__close" htmlFor="modal-close">
            <span className="_v-hidden">Закрыть форму</span>
          </label>
        </aside>
      </Fragment>
    );
  }

  return ReactDom.createPortal(
    renderModal(),
    element
  )
}